const path = require("path");

/**
 *
 * @param {string[]} names
 */
function resolve(names) {
   const alias = {};
   names.forEach((item) => {
      alias[`@${item}`] = path.resolve(__dirname, "src/" + item);
   });

   return alias;
}

module.exports = {
   webpack: {
      alias: resolve([
         "assets",
         "context",
         "components",
         "layouts",
         "styles",
         "routes",
         'data'
      ]),
   },
};
