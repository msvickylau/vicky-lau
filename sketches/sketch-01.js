/* eslint no-param-reassign: "error" */
const canvasSketch = require('canvas-sketch');

const settings = {
  // dimensions: 'A4', // [600, 600],
  // pixelsPerInch: 300,
  // orientation: 'landscape',

  dimensions: [1080, 1080],

};

const sketch = () => ({ context, width, height }) => {
  context.fillStyle = 'white';
  context.fillRect(0, 0, width, height);
  context.lineWidth = width * 0.01;

  const size = width * 0.10;
  const gap = width * 0.03;
  const ix = width * 0.17;
  const iy = width * 0.17;
  const off = width * 0.02;

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j + -1) {
      const x = ix + (size + gap) * i;
      const y = iy + (size + gap) * j;

      context.beginPath();
      context.rect(x, y, size, size);
      context.stroke();

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + off, y + off, size - (off * 2), size - (off * 2));
        context.stroke();
      }
    }
  }
};

canvasSketch(sketch, settings);
