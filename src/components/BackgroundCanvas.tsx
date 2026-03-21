"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animationId: number;
    let cleanup: () => void;

    const init = async () => {
      const THREE = await import("three");

      const w = window.innerWidth;
      const h = window.innerHeight;
      const isDark = theme === "dark";

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(isDark ? 0x000000 : 0xffffff, 1);
      mount.appendChild(renderer.domElement);

      // Scene + Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
      camera.position.z = 8;

      // Particles
      const count = 2000;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        size: isDark ? 0.028 : 0.022,
        color: isDark ? 0xffffff : 0x334155,
        transparent: true,
        opacity: isDark ? 0.45 : 0.2,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Subtle accent cluster (teal particles — a handful)
      const accentCount = 80;
      const aPositions = new Float32Array(accentCount * 3);
      for (let i = 0; i < accentCount; i++) {
        aPositions[i * 3]     = (Math.random() - 0.5) * 20;
        aPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        aPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      const aGeo = new THREE.BufferGeometry();
      aGeo.setAttribute("position", new THREE.BufferAttribute(aPositions, 3));
      const aMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0x0d9488,
        transparent: true,
        opacity: isDark ? 0.6 : 0.4,
        sizeAttenuation: true,
      });
      const accentParticles = new THREE.Points(aGeo, aMat);
      scene.add(accentParticles);

      // Scroll tracking
      let scrollY = 0;
      const onScroll = () => {
        scrollY = window.scrollY;
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      // Animation
      const clock = new THREE.Clock();
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        particles.rotation.y = t * 0.012;
        particles.rotation.x = Math.sin(t * 0.08) * 0.04;

        accentParticles.rotation.y = -t * 0.008;
        accentParticles.rotation.x = Math.cos(t * 0.06) * 0.03;

        // Scroll parallax — camera drifts down as page scrolls
        camera.position.y = -scrollY * 0.0012;
        // Slight z-push on scroll for depth effect
        camera.position.z = 8 - scrollY * 0.0005;

        renderer.render(scene, camera);
      };
      animate();

      // Resize
      const onResize = () => {
        const nw = window.innerWidth;
        const nh = window.innerHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        aGeo.dispose();
        aMat.dispose();
        if (mount && renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
