"use client";
import { useRef, useEffect } from "react";

// Este es un fondo Galaxy JS-TW simplificado inspirado en reactbits.dev
export default function GalaxyBg({ color = "#d357fe", ...props }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Estrellas animadas
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.15 + 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    function drawGalaxy() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0a0a23";
      ctx.fillRect(0, 0, width, height);
      // Nebulosa animada
      const grad = ctx.createRadialGradient(
        width / 2,
        (height * 0.7) / 2,
        40 + Math.sin(t / 40) * 20,
        width / 2,
        (height * 0.7) / 2,
        width / 2
      );
      grad.addColorStop(0, color);
      grad.addColorStop(
        0.5,
        `rgba(211,87,254,${0.2 + 0.1 * Math.sin(t / 60)})`
      );
      grad.addColorStop(1, "rgba(10,10,35,0.9)");
      ctx.globalAlpha = 0.7 + 0.1 * Math.sin(t / 60);
      ctx.beginPath();
      ctx.arc(width / 2, (height * 0.7) / 2, width / 2, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.globalAlpha = 1;
      // Estrellas animadas
      stars.forEach((star) => {
        // Movimiento vertical suave y parpadeo
        star.y += star.speed * Math.sin(t / 60 + star.phase);
        if (star.y > height) star.y = 0;
        if (star.y < 0) star.y = height;
        const alpha = star.a + 0.3 * Math.sin(t / 30 + star.phase);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.1, alpha)})`;
        ctx.fill();
      });
    }
    function animate() {
      t++;
      drawGalaxy();
      requestAnimationFrame(animate);
    }
    animate();
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#0a0a23",
      }}
      width={typeof window !== "undefined" ? window.innerWidth : 1920}
      height={typeof window !== "undefined" ? window.innerHeight : 1080}
      aria-hidden="true"
      {...props}
    />
  );
}
