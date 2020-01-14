import canvasRef from '../model/canvas';

const img = new Image();

export default class SwitchCanvasParamsProvider {
  static greyScale() {
    img.style.display = 'none';
    const imageData = canvasRef.ctxo.getImageData(0, 0,
      canvasRef.canvas.width, canvasRef.canvas.height);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }
    canvasRef.ctx.putImageData(imageData, 0, 0);
  }

  static changePixelValue(event) {
    canvasRef.pixelValue = event.target.value;
    document.querySelector('.pen-size__number').innerHTML = event.target.value;
  }

  static switchSizeCanvas(size) {
    const oldimg = canvasRef.ctxo.getImageData(0, 0,
      canvasRef.ctxo.canvas.width, canvasRef.ctxo.canvas.height);
    canvasRef.canvaso.width = size;
    canvasRef.canvaso.height = size;
    canvasRef.canvas.width = size;
    canvasRef.canvas.height = size;
    document.querySelector('.canvas-field').style.width = `${size}px`;
    document.querySelector('.canvas-field').style.height = `${size}px`;
    document.querySelector('.canvas-field-temp').style.width = `${size}px`;
    document.querySelector('.canvas-field-temp').style.height = `${size}px`;
    document.querySelector('.canvas').style.width = `${size}px`;
    document.querySelector('.canvas').style.height = `${size}px`;
    canvasRef.ctxo.putImageData(oldimg, 0, 0, 0, 0,
      canvasRef.canvaso.width, canvasRef.canvaso.height);
  }
}
