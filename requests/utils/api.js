const axios = require("axios");

const COLOR_API = "https://www.thecolorapi.com";

const colorAPI = axios.create({
  baseURL: COLOR_API,
});

module.exports = colorAPI;
