// Define a base class for shapes
class Shape {
  constructor(color) {
    this.color = color; // Initialize the color property
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Define a class for circles, extending the Shape class
class Circle extends Shape {
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render a circle as SVG
  render(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                    <circle cx="150" cy="100" r="80" fill="${this.color}" />
                    <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="50">${text}</text>
                  </svg>`;
  }
}

// Define a class for triangles, extending the Shape class
class Triangle extends Shape {
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render a triangle as SVG
  render(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                    <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
                    <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="50">${text}</text>
                  </svg>`;
  }
}

// Define a class for squares, extending the Shape class
class Square extends Shape {
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render a square as SVG
  render(text, textColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                      <rect width="200" height="200" fill="${this.color}" />
                      <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="50">${text}</text>
                    </svg>`;
  }
}

// Export the classes
module.exports = { Triangle, Circle, Square };
