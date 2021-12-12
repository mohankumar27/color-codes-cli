const colorAPI = require("./utils/api");

const SUCCESS = 200;
const color_codes = [];

const parseResponse = (key, response) => {
  const hex = response.hex.value || "nil";
  const rgb = response.rgb.value || "nil";
  const hsl = response.hsl.value || "nil";
  const hsv = response.hsv.value || "nil";
  const cmyk = response.cmyk.value || "nil";
  const name = response.name.value || "nil";

  if (!response.name.exact_match_name) {
    color_codes.push({
      [`${key}Response`]: {
        hex,
        rgb,
        hsl,
        hsv,
        cmyk,
        name,
        closest_named_hex: response.name.closest_named_hex,
      },
    });
  } else {
    color_codes.push({
      [`${key}Response`]: { hex, rgb, hsl, hsv, cmyk, name },
    });
  }
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
  if (rgb.length !== 0) {
    await getCodes({ rgb: rgb.join(",") });
  }
  return color_codes;
};

module.exports = { fetchColorCodes };
