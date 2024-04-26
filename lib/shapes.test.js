// lib/shapes.test.js

const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Triangle("blue");
    const svgContent = shape.render("ABC", "red");

    expect(svgContent).toEqual(
      '<svg width="300" height="200">\n              <polygon points="150, 20 280, 180 20, 180" fill="blue" />\n              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="red">ABC</text>\n            </svg>'
    );
  });
});

describe("Circle", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Circle("green");
    const svgContent = shape.render("XYZ", "yellow");

    expect(svgContent).toEqual(
      '<svg width="300" height="200">\n              <circle cx="150" cy="100" r="80" fill="green" />\n              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="yellow">XYZ</text>\n            </svg>'
    );
  });
});

describe("Square", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Square("orange");
    const svgContent = shape.render("123", "black");

    expect(svgContent).toEqual(
      '<svg width="300" height="200">\n              <rect width="200" height="200" fill="orange" />\n              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">123</text>\n            </svg>'
    );
  });
});
