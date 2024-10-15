const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let color1 = getInput()
let color2 = getInput()
if (color1 === undefined && color2 === undefined)
    return "Please provide valid colors."
  else if (isValidPrimary(color1) && isValidSecondary(color2))
    return 'This is a valid color'