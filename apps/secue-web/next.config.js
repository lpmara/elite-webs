const withNx = require('@nrwl/next/plugins/with-nx');

const withLess = require('@zeit/next-less');
// module.exports = withLess(
//   withNx({
//     cssModules: true,
//   })
// );

module.exports = withLess(
  withNx({
    cssModules: true,
    webpack: (config) => {
      config.plugins.map((value) => {
        if (value.options) {
          value.options.ignoreOrder = true;
        }
      });

      return config;
    },
  })
);
