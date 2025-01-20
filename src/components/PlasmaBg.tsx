import React, { useEffect, useRef } from 'react';

export const PlasmaBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPlasma = (t: number) => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const value = Math.sin(x * 0.01 + t) + 
                       Math.sin(y * 0.01 + t) +
                       Math.sin((x + y) * 0.01 + t) +
                       Math.sin(Math.sqrt(x * x + y * y) * 0.01);

          const i = (x + y * canvas.width) * 4;
          const normalized = (Math.sin(value) + 1) / 2;

          // Purple to pink gradient with more vibrant colors
          data[i] = Math.sin(normalized * Math.PI) * 255; // R
          data[i + 1] = 0; // G
          data[i + 2] = Math.cos(normalized * Math.PI) * 255; // B
          data[i + 3] = 20; // Lower alpha for subtler effect
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 0.01; // Slower animation
      createPlasma(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-50"
      style={{ filter: 'blur(150px)' }} // Increased blur for softer effect
    />
  );
};