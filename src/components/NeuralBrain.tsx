"use client";

import { useEffect, useRef } from "react";
import type * as THREE_NS from "three";

export default function NeuralBrain({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animationId: number;
    let cleanup: () => void;

    const init = async () => {
      const THREE = await import("three");

      const w = mount.clientWidth;
      const h = mount.clientHeight;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
      camera.position.z = 5.5;

      // ── Glowing circular sprite texture ──────────────────────────────
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = 64;
      spriteCanvas.height = 64;
      const ctx = spriteCanvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(20,184,166,1)");
      grad.addColorStop(0.35, "rgba(20,184,166,0.7)");
      grad.addColorStop(1, "rgba(20,184,166,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const nodeTexture = new THREE.CanvasTexture(spriteCanvas);

      // ── Generate nodes in two brain-like hemispheres ──────────────────
      const NODE_COUNT = 100;
      const nodeVecs: THREE_NS.Vector3[] = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        const isLeft = i < NODE_COUNT / 2;
        const cx = isLeft ? -0.75 : 0.75;
        // Volume-uniform sphere sampling
        const r = 1.7 * Math.cbrt(Math.random());
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        nodeVecs.push(
          new THREE.Vector3(
            cx + r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta) * 0.85,
            r * Math.cos(phi) * 0.65,
          )
        );
      }

      // ── Node points ───────────────────────────────────────────────────
      const nodePositions = new Float32Array(NODE_COUNT * 3);
      nodeVecs.forEach((v, i) => {
        nodePositions[i * 3] = v.x;
        nodePositions[i * 3 + 1] = v.y;
        nodePositions[i * 3 + 2] = v.z;
      });

      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

      const nodeMat = new THREE.PointsMaterial({
        size: 0.13,
        map: nodeTexture,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const nodePoints = new THREE.Points(nodeGeo, nodeMat);

      // ── Connection lines ──────────────────────────────────────────────
      const DIST_THRESHOLD = 1.25;
      const MAX_CONN = 4;
      const connCounts = new Array(NODE_COUNT).fill(0);
      const lineVerts: number[] = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        if (connCounts[i] >= MAX_CONN) continue;
        for (let j = i + 1; j < NODE_COUNT; j++) {
          if (connCounts[i] >= MAX_CONN) break;
          if (connCounts[j] >= MAX_CONN) continue;
          if (nodeVecs[i].distanceTo(nodeVecs[j]) < DIST_THRESHOLD) {
            lineVerts.push(
              nodeVecs[i].x, nodeVecs[i].y, nodeVecs[i].z,
              nodeVecs[j].x, nodeVecs[j].y, nodeVecs[j].z,
            );
            connCounts[i]++;
            connCounts[j]++;
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(lineVerts), 3)
      );
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.18,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);

      // ── Brain group ───────────────────────────────────────────────────
      const brain = new THREE.Group();
      brain.add(lines);
      brain.add(nodePoints);
      scene.add(brain);

      // ── Mouse tracking ────────────────────────────────────────────────
      let mouseInfluenceX = 0;
      let mouseInfluenceY = 0;
      let targetInfluenceX = 0;
      let targetInfluenceY = 0;

      const onMouseMove = (e: MouseEvent) => {
        targetInfluenceY = (e.clientX / window.innerWidth - 0.5) * 0.9;
        targetInfluenceX = (e.clientY / window.innerHeight - 0.5) * 0.4;
      };
      window.addEventListener("mousemove", onMouseMove);

      // ── Animation ─────────────────────────────────────────────────────
      const clock = new THREE.Clock();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        mouseInfluenceX += (targetInfluenceX - mouseInfluenceX) * 0.04;
        mouseInfluenceY += (targetInfluenceY - mouseInfluenceY) * 0.04;

        brain.rotation.y = t * 0.12 + mouseInfluenceY;
        brain.rotation.x = mouseInfluenceX + Math.sin(t * 0.2) * 0.06;

        // Subtle pulse
        lineMat.opacity = 0.14 + Math.sin(t * 0.9) * 0.06;
        nodeMat.size = 0.13 + Math.sin(t * 1.3) * 0.015;

        renderer.render(scene, camera);
      };
      animate();

      // ── Resize ────────────────────────────────────────────────────────
      const onResize = () => {
        const nw = mount.clientWidth;
        const nh = mount.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
        nodeTexture.dispose();
        if (mount && renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    init();
    return () => cleanup?.();
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
