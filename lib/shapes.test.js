const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Triangle("blue");
    const svgContent = shape.render("ABC", "red");

    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="150, 20 280, 180 20, 180" fill="blue" />
                  <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="50">ABC</text>
                </svg>`
    );
  });
});

describe("Circle", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Circle("green");
    const svgContent = shape.render("XYZ", "yellow");

    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="80" fill="green" />
                  <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="yellow" font-size="50">XYZ</text>
                </svg>`
    );
  });
});

describe("Square", () => {
  test("render method should generate correct SVG content", () => {
    const shape = new Square("orange");
    const svgContent = shape.render("123", "black");

    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                    <rect width="200" height="200" fill="orange" />
                    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="50">123</text>
                  </svg>`
    );
  });
});
