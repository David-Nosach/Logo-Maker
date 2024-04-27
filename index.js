const inquirer = require("inquirer");
const fs = require("fs");

// Importing classes for shapes
const { Triangle, Circle, Square } = require("./lib/shapes");

// Function to create logo SVG
async function createLogo() {
  console.log("Welcome to SVG Logo Generator!\n");

  // Prompting user for input
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
      validate: (value) => {
        if (value.length <= 3) {
          return true;
        }
        return "Please enter up to three characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexadecimal):",
    },
  ]);

  // Creating shape object based on user input
  let shape;
  switch (userInput.shape) {
    case "Circle":
      shape = new Circle(userInput.shapeColor);
      break;
    case "Triangle":
      shape = new Triangle(userInput.shapeColor);
      break;
    case "Square":
      shape = new Square(userInput.shapeColor);
      break;
    default:
      break;
  }

  // Creating SVG content
  const svgContent = shape.render(userInput.text, userInput.textColor);

  // Writing SVG content to file
  fs.writeFile("logo.svg", svgContent, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

// Calling function to create logo
createLogo();
