// lib/shapes.js

class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const circleRadius = 80;
    const textSize = 50;
    const textX = 150;
    const textY = 100 + textSize / 4; // Adjusted for font baseline

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="${circleRadius}" fill="${this.color}" />
                  <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
                </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const textSize = 50;
    const textX = 150;
    const textY = 100 + textSize / 4; // Adjusted for font baseline

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
                  <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
                </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const squareSize = 200;
    const textSize = 50;
    const textX = squareSize / 2;
    const textY = squareSize / 2 + textSize / 4; // Adjusted for font baseline

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <rect width="${squareSize}" height="${squareSize}" fill="${this.color}" />
                  <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
                </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
