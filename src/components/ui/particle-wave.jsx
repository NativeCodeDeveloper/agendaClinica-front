'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Vertex — pasa la posición X normalizada al fragment
const particleVertex = `
  attribute float scale;
  uniform float uTime;
  varying float vNormX;

  void main() {
    vec3 p = position;
    float s = scale;
    p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    p.x += (sin(p.y + uTime) * 0.5);
    s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;

    // Normaliza x original: rango -30 a 30 → 0 a 1
    vNormX = clamp((position.x + 30.0) / 60.0, 0.0, 1.0);

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = s * 22.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment — gradiente cian → indigo → púrpura (colores del logo)
const particleFragment = `
  uniform float uTime;
  varying float vNormX;

  void main() {
    vec3 cyan   = vec3(0.0,  0.83, 1.0);   // #00D4FF
    vec3 indigo = vec3(0.39, 0.40, 0.95);  // #6366F1
    vec3 purple = vec3(0.55, 0.36, 0.96);  // #8B5CF6

    // Desplazamiento animado para que el gradiente fluya
    float t = vNormX + sin(uTime * 0.25) * 0.12;
    t = clamp(t, 0.0, 1.0);

    vec3 color = t < 0.5
      ? mix(cyan, indigo, t * 2.0)
      : mix(indigo, purple, (t - 0.5) * 2.0);

    gl_FragColor = vec4(color, 0.75);
  }
`;

export function ParticleWave({ className = '' }) {
  const canvasRef = useRef(null);
  const sceneRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas    = canvasRef.current;
    const winWidth  = window.innerWidth;
    const winHeight = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 0.01, 1000);
    camera.position.set(0, 6, 5);

    const scene    = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(winWidth, winHeight);
    renderer.setClearColor(0x000000, 0);

    // Geometría
    const gap     = 0.3;
    const amountX = 200;
    const amountY = 200;
    const total   = amountX * amountY;
    const positions = new Float32Array(total * 3);
    const scales    = new Float32Array(total);

    let i = 0, j = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        positions[i]     = ix * gap - (amountX * gap) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * gap - (amountX * gap) / 2;
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale',    new THREE.BufferAttribute(scales,    1));

    const material = new THREE.ShaderMaterial({
      transparent:    true,
      vertexShader:   particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let animationId = null;

    const animate = () => {
      material.uniforms.uTime.value += 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    sceneRef.current = { animationId, renderer, scene, particles, geometry, material };

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
