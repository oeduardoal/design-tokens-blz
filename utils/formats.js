const variablesWithPrefix = (prefix, properties, commentStyle) => {
  return properties
    .map(prop => {
      let to_ret_prop =
        prefix +
        prop.name +
        " ?= " +
        (prop.attributes.category === "asset"
          ? '"' + prop.value + '"'
          : prop.value);

      if (prop.comment) {
        if (commentStyle === "short") {
          to_ret_prop = to_ret_prop.concat(" // " + prop.comment);
        } else {
          to_ret_prop = to_ret_prop.concat(" /* " + prop.comment + " */");
        }
      }

      return to_ret_prop;
    })
    .filter(strVal => !!strVal)
    .join("\n");
};

module.exports = [
  {
    name: "json/flat",
    formatter: function(dictionary) {
      return JSON.stringify(dictionary.properties, null, 2);
    }
  },
  {
    name: "stylus/variables",
    formatter: function(dictionary) {
      return variablesWithPrefix("$", dictionary.allProperties, "short");
    }
  },
  {
    name: "javscript/import-es6",
    formatter: function(dictionary) {
      return (
        "export default " + JSON.stringify(dictionary.properties, null, 2) + ";"
      );
    }
  }
];
