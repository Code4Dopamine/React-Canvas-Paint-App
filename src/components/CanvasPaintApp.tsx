import React, { useRef, useEffect } from 'react';

const getCanvasCoordinates = (canvas: HTMLCanvasElement, event: MouseEvent) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
};

interface CanvasPaintAppProps {
  width: number;
  height: number;
  onChange: (newWidth: number, newHeight: number) => void; // Define the onChange type
}

const CanvasPaintApp: React.FC<CanvasPaintAppProps> = ({ width, height, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas setup
    canvas.width = width;
    canvas.height = height;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      const { x, y } = getCanvasCoordinates(canvas, e);
      isDrawing = true;
      lastX = x;
      lastY = y;
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      const { x, y } = getCanvasCoordinates(canvas, e);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [width, height]);

  // Call the onChange function whenever the size changes
  useEffect(() => {
    onChange(width, height);
  }, [width, height, onChange]);

  return (
    <canvas ref={canvasRef} width={width} height={height} className="border border-gray-500 bg-white rounded-md" />
  );
};

export default CanvasPaintApp;
