module.exports = [
  {
    name: "tokens-json",
    transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
  },
  {
    name: "tokens-stylus",
    transforms: ["name/cti/kebab", "time/seconds", "size/px", "color/css"]
  },
  {
    name: "tokens-js",
    transforms: ["name/cti/constant", "size/px", "color/hex"]
  }
];
