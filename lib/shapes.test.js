// Import the Triangle, Circle, and Square classes from the shapes module
const { Triangle, Circle, Square } = require("./shapes");

// Test suite for the Triangle class
describe("Triangle", () => {
  // Test case for the render method of the Triangle class
  test("render method should generate correct SVG content", () => {
    // Create a new instance of the Triangle class with a blue color
    const shape = new Triangle("blue");
    // Generate SVG content using the render method with specified text and text color
    const svgContent = shape.render("ABC", "red");

    // Define the expected SVG content for the Triangle
    const expectedSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,20 280,180 20,180" fill="blue" />
        <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="50">ABC</text>
      </svg>`;

    // Compare the generated SVG content with the expected SVG content
    expect(svgContent.replace(/\s/g, "")).toEqual(
      expectedSvgContent.replace(/\s/g, "")
    );
  });
});

// Test suite for the Circle class
describe("Circle", () => {
  // Test case for the render method of the Circle class
  test("render method should generate correct SVG content", () => {
    // Create a new instance of the Circle class with a green color
    const shape = new Circle("green");
    // Generate SVG content using the render method with specified text and text color
    const svgContent = shape.render("XYZ", "yellow");

    // Define the expected SVG content for the Circle
    const expectedSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="115" text-anchor="middle" alignment-baseline="middle" fill="yellow" font-size="50">XYZ</text>
      </svg>`;

    // Compare the generated SVG content with the expected SVG content
    expect(svgContent.replace(/\s/g, "")).toEqual(
      expectedSvgContent.replace(/\s/g, "")
    );
  });
});

// Test suite for the Square class
describe("Square", () => {
  // Test case for the render method of the Square class
  test("render method should generate correct SVG content", () => {
    // Create a new instance of the Square class with an orange color
    const shape = new Square("orange");
    // Generate SVG content using the render method with specified text and text color
    const svgContent = shape.render("123", "black");

    // Define the expected SVG content for the Square
    const expectedSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="orange" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="50">123</text>
      </svg>`;

    // Compare the generated SVG content with the expected SVG content
    expect(svgContent.replace(/\s/g, "")).toEqual(
      expectedSvgContent.replace(/\s/g, "")
    );
  });
});
