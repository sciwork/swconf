'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import iconImg from '@/assets/android-chrome-512x512.png';

const Banner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      const spawnRadius = 300;
      const speed = spawnRadius / 50;

      const init = [];
      const maxParts = 200;
      for (let a = 0; a < maxParts; a++) {
        const initX = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
        const initY = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;

        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        init.push({
          x: initX,
          y: initY,
          xs: (initX - w / 2) / speed,
          ys: (initY - h / 2) / speed,
          l: Math.random() * 5,
          color: 'rgb(' + r + ',' + g + ',' + b + ')',
        });
      }

      const particles: string | any[] = [];
      for (let b = 0; b < maxParts; b++) {
        particles[b] = init[b];
      }

      const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);
        for (let c = 0; c < particles.length; c++) {
          const p = particles[c];
          ctx.strokeStyle = 'rgba(255,255,255,' + p.l / 20 + ')';
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          ctx.stroke();
        }
        move();
      };

      const move = () => {
        for (let b = 0; b < particles.length; b++) {
          const p = particles[b];
          p.x += p.xs;
          p.y += p.ys;

          // if particle position exceeds the canvas
          if (p.x < 0 || p.y < 0 || p.x > w || p.y > h) {
            p.x = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
            p.y = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;
            p.xs = (p.x - w / 2) / speed;
            p.ys = (p.y - h / 2) / speed;
          }
        }
      };

      const intervalId = setInterval(draw, 30);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <div className="tw-relative tw-flex tw-h-96 tw-flex-col tw-items-center tw-justify-center tw-gap-x-20 tw-gap-y-10 tw-bg-black tablet:tw-flex-row">
      <canvas
        className="tw-absolute tw-h-full tw-w-full"
        ref={canvasRef}
      ></canvas>
      <Image className="tw-h-36 tw-w-36" src={iconImg} alt="sciwork icon" />
      <div className="tw-prose-lg tw-text-center tw-font-yk tw-text-white tablet:tw-prose-2xl">
        <h1 className="tw-mb-2">sciwork</h1>
        {/* <h3 className="tw-mt-0">TBD | Taipei</h3> */}
      </div>
    </div>
  );
};

export default Banner;
