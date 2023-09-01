module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-media-queries": {
          preserve: false,
        },
        "custom-properties": {
          preserve: false
        }
      },
    }),
    require("postcss-sort-media-queries"),
  ],
});
