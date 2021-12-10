const colorAPI = require("./utils/api");
const log = console.log;

const SUCCESS = 200;
const color_codes = [];

const parseResponse = (key, response) => {
  const hex = response.hex.value || "nil";
  const rgb = response.rgb.value || "nil";
  const hsl = response.hsl.value || "nil";
  const hsv = response.hsv.value || "nil";
  const cmyk = response.cmyk.value || "nil";

  color_codes.push({ [`${key}Response`]: { hex, rgb, hsl, hsv, cmyk } });
};

const getCodes = async (params) => {
  const response = await colorAPI.get("/id", {
    params: params,
  });

  const key = Object.keys(params)[0];
  if (response.status != SUCCESS) {
    color_codes.push({
      [`${key}Response`]: "Sorry!! No matching color codes found",
    });
    return;
  }

  parseResponse(key, response.data);
};

const fetchColorCodes = async ({ hex, rgb }) => {
  if (hex) {
    await getCodes({ hex });
  }
  if (rgb) {
    await getCodes({ rgb: rgb.join(",") });
  }
  // log(color_codes);
  return color_codes;
};

module.exports = { fetchColorCodes };
