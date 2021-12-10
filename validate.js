const program = require("commander");

const HEX_LENGTH = 6;
const RGB_LENGTH = 3;

const validateHEXCode = (value, previous) => {
  if (value.length != HEX_LENGTH) {
    throw new program.InvalidArgumentError(
      `Hex code length should be ${HEX_LENGTH}`
    );
  }
  return value;
};

const validateRGBCode = (value, previous) => {
  if (previous.length > RGB_LENGTH - 1) return previous;
  const number = parseInt(value);
  if (isNaN(number) || number < 0 || number > 255) {
    throw new program.InvalidArgumentError(
      `RGB codes should be a valid number in range 0-255}`
    );
  }
  return previous.concat([number]);
};

module.exports = { validateHEXCode, validateRGBCode };
