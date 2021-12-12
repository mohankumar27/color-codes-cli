const program = require("commander");
const chalk = require("chalk");
const logUpdate = require("log-update");
const log = console.log;

const { validateHEXCode, validateRGBCode } = require("./validate");
const { fetchColorCodes } = require("./requests/color_fetch");
const { spinner } = require("./requests/utils/spinner");

program.version("1.0.0").description("Provides color codes of all formats");

program
  .option("--hex <string>", "hex color code", validateHEXCode)
  .option("--rgb <numbers...>", "rgb color code", validateRGBCode, []);

program.parse(process.argv);

const timer = spinner();

fetchColorCodes(program.opts()).then((response) => {
  clearInterval(timer);
  logUpdate.clear();
  response.forEach((result) => {
    const key = Object.keys(result)[0];
    const value = result[key];
    log(key, value);
    log("color:", chalk.bgHex(value.hex)("           "));
    log("-------------");
  });
});
