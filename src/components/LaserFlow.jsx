"use client";
import { useRef, useEffect } from "react";

// Shader fuente adaptado de reactbits.dev
const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float time;
  uniform vec3 color;
  uniform float fogIntensity;
  uniform float flowStrength;
  void main() {
    float beam = smoothstep(0.48, 0.52, vUv.x);
    float fog = exp(-10.0 * abs(vUv.y - 0.8)) * fogIntensity;
    float glow = pow(beam, 8.0) * flowStrength;
    vec3 col = color * (glow + fog);
    gl_FragColor = vec4(col, 1.0);
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function createProgram(gl, vsSource, fsSource) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  return program;
}

export default function LaserFlow({
  color = "#d357fe",
  fogIntensity = 0.45,
  flowStrength = 0.25,
  ...props
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);

    const program = createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(program);

    // Vertex positions for a full screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );
    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const colorLoc = gl.getUniformLocation(program, "color");
    const fogLoc = gl.getUniformLocation(program, "fogIntensity");
    const flowLoc = gl.getUniformLocation(program, "flowStrength");
    const timeLoc = gl.getUniformLocation(program, "time");

    // Convert hex color to vec3
    const rgb = [
      parseInt(color.slice(1, 3), 16) / 255,
      parseInt(color.slice(3, 5), 16) / 255,
      parseInt(color.slice(5, 7), 16) / 255,
    ];

    let start = performance.now();
    function render() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform3fv(colorLoc, rgb);
      gl.uniform1f(fogLoc, fogIntensity);
      gl.uniform1f(flowLoc, flowStrength);
      gl.uniform1f(timeLoc, (performance.now() - start) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    render();
    // Resize handler
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [color, fogIntensity, flowStrength]);

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
        background: "#0a0a23"
      }}
      width={typeof window !== "undefined" ? window.innerWidth : 1920}
      height={typeof window !== "undefined" ? window.innerHeight : 1080}
      aria-hidden="true"
      {...props}
    />
  );
}
