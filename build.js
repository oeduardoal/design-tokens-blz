const StyleDictionaryPackage = require("style-dictionary");
const { getBrands } = require("./utils/brands");
const { log } = require("./utils/logs");
const transformGroups = require("./utils/transformGroups");
const formats = require("./utils/formats");

const getStyleDictionaryConfig = (brand, _platform) => {
  return {
    source: ["src/globals/**/*.json", `src/brands/${brand}/**/*.json`],
    platforms: {
      "web/json": {
        transformGroup: "tokens-json",
        buildPath: `dist/web/${brand}/`,
        prefix: "token",
        files: [
          {
            destination: "tokens.json",
            format: "json/flat"
          }
        ]
      },
      "web/stylus": {
        transformGroup: "tokens-stylus",
        buildPath: `dist/web/${brand}/`,
        prefix: "token",
        files: [
          {
            destination: "tokens.styl",
            format: "stylus/variables"
          }
        ]
      },
      "web/js": {
        transformGroup: "tokens-js",
        buildPath: `dist/web/${brand}/`,
        prefix: "token",
        files: [
          {
            destination: "tokens.js",
            format: "javscript/import-es6"
          }
        ]
      }
    }
  };
};

log("Build started...");

const brands = getBrands();

formats.forEach(format => StyleDictionaryPackage.registerFormat(format));

transformGroups.forEach(tf =>
  StyleDictionaryPackage.registerTransformGroup(tf)
);

brands.map(brand => {
  const platform = "web"; // for while
  log("\n==============================================");
  log(`\nProcessing: [${platform}] [${brand}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand, platform)
  );

  StyleDictionary.buildPlatform("web/js");
  StyleDictionary.buildPlatform("web/stylus");
  StyleDictionary.buildPlatform("web/json");

  log("\nEnd processing");
});

log("\n==============================================");
log("\nBuild completed!");
