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
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="80" fill="${this.color}" />
                  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
                  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <rect width="200" height="200" fill="${this.color}" />
                  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };