// Import the classes Triangle, Circle, and Square from the shapes module
const { Triangle, Circle, Square } = require("./shapes");

// Test suite for the Triangle class
describe("Triangle", () => {
  // Test case to verify that the render method of Triangle generates correct SVG content
  test("render method should generate correct SVG content", () => {
    // Create a new instance of Triangle with blue color
    const shape = new Triangle("blue");
    // Call the render method with text "ABC" and red color for text
    const svgContent = shape.render("ABC", "red");

    // Expect the generated SVG content to match the expected SVG content
    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="150, 20 280, 180 20, 180" fill="blue" />
                  <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="50">ABC</text>
                </svg>`
    );
  });
});

// Test suite for the Circle class
describe("Circle", () => {
  // Test case to verify that the render method of Circle generates correct SVG content
  test("render method should generate correct SVG content", () => {
    // Create a new instance of Circle with green color
    const shape = new Circle("green");
    // Call the render method with text "XYZ" and yellow color for text
    const svgContent = shape.render("XYZ", "yellow");

    // Expect the generated SVG content to match the expected SVG content
    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="80" fill="green" />
                  <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="yellow" font-size="50">XYZ</text>
                </svg>`
    );
  });
});

// Test suite for the Square class
describe("Square", () => {
  // Test case to verify that the render method of Square generates correct SVG content
  test("render method should generate correct SVG content", () => {
    // Create a new instance of Square with orange color
    const shape = new Square("orange");
    // Call the render method with text "123" and black color for text
    const svgContent = shape.render("123", "black");

    // Expect the generated SVG content to match the expected SVG content
    expect(svgContent).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                    <rect width="200" height="200" fill="orange" />
                    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="50">123</text>
                  </svg>`
    );
  });
});
