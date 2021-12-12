const logUpdate = require("log-update");

const spin = {
  interval: 100,
  frames: [
    "🕛 ",
    "🕐 ",
    "🕑 ",
    "🕒 ",
    "🕓 ",
    "🕔 ",
    "🕕 ",
    "🕖 ",
    "🕗 ",
    "🕘 ",
    "🕙 ",
    "🕚 ",
  ],
};

const spinner = () => {
  const frames = spin.frames;
  const interval = spin.interval;
  let index = 0;
  return setInterval(() => {
    logUpdate(frames[index++ % frames.length]);
  }, interval);
};

module.exports = { spinner };
