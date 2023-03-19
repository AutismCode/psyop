import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        this.size -= 0.05;
        if (this.size < 0) {
          this.x = (canvas.width / 2) + Math.random() * 200 - 100;
          this.y = canvas.height;
          this.size = Math.random() * 5 + 2;
          this.weight = Math.random() * 0.5 - 0.05;
        }
        this.y -= this.weight;
        this.draw();
      }
    }

    function init() {
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 2;
        const color = '#0f0';
        const weight = Math.random() * 0.5 - 0.05;
        particles.push(new Particle(x, y, size, color, weight));
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
};

export default AnimatedBackground;
