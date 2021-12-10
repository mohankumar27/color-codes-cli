const program = require("commander");
const log = console.log;

const { validateHEXCode, validateRGBCode } = require("./validate");
const { fetchColorCodes } = require("./requests/color_fetch");

program.version("1.0.0").description("Provides color codes of all formats");

program
  .option("--hex <string>", "hex color code", validateHEXCode)
  .option(
    "--rgb <numbers...>",
    "rgb color code",
    undefined,
    validateRGBCode,
    []
  );

program.parse(process.argv);

fetchColorCodes(program.opts()).then((response) => {
  response.forEach((result) => {
    const key = Object.keys(result)[0];
    const value = result[key];
    log(key, value);
  });
});
