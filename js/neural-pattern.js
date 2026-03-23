const NeuralPattern = {
    nodeCount: 40,
    maxDistance: 150,
    svgNS: 'http://www.w3.org/2000/svg',
    
    init() {
        this.container = document.getElementById('neural-bg');
        if (this.container) {
            this.generate();
        }
    },
    
    generate() {
        if (!this.container) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const nodes = [];
        for (let i = 0; i < this.nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height
            });
        }
        
        const svg = document.createElementNS(this.svgNS, 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        
        const group = document.createElementNS(this.svgNS, 'g');
        group.setAttribute('fill', 'currentColor');
        group.setAttribute('stroke', 'currentColor');
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.maxDistance) {
                    const line = document.createElementNS(this.svgNS, 'line');
                    line.setAttribute('x1', nodes[i].x);
                    line.setAttribute('y1', nodes[i].y);
                    line.setAttribute('x2', nodes[j].x);
                    line.setAttribute('y2', nodes[j].y);
                    line.setAttribute('stroke-width', '1');
                    group.appendChild(line);
                }
            }
        }
        
        nodes.forEach(node => {
            const circle = document.createElementNS(this.svgNS, 'circle');
            circle.setAttribute('cx', node.x);
            circle.setAttribute('cy', node.y);
            circle.setAttribute('r', '4');
            group.appendChild(circle);
        });
        
        svg.appendChild(group);
        
        this.container.innerHTML = '';
        this.container.appendChild(svg);
    },
    
    regenerate() {
        this.generate();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    NeuralPattern.init();
});

window.addEventListener('resize', () => {
    if (NeuralPattern.container) {
        NeuralPattern.generate();
    }
});

window.NeuralPattern = NeuralPattern;
