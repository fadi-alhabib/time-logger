const path = require("path");

// This assumes Electron will load from the `build/` folder
// and your assets will be in `build/assets`
const BACKGROUND = `file://${path.resolve(
  __dirname,
  "../../build/assets/bg.svg"
)}`;

module.exports = {
  BACKGROUND,
};
