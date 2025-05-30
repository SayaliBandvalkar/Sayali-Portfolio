import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 100;

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 4 + 1;
    this.color = `rgba(255,255,255,${Math.random()})`;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(width, height) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.vx *= -1;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.vy *= -1;
    }
  }
}

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Init particles
    particlesRef.current = Array.from(
      { length: PARTICLE_COUNT },
      () => new Particle(width, height)
    );

    const animate = () => {
      ctx.fillStyle = "rgba(34, 34, 34, 0.3)";
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        particle.update(width, height);
        particle.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particlesRef.current = Array.from(
        { length: PARTICLE_COUNT },
        () => new Particle(width, height)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "block",
        zIndex: -1,
        background: "#111", // dark background to enhance particles
      }}
    />
  );
};

export default ParticleCanvas;
