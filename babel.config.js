module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
          // only import needed polyfills
          useBuiltIns: "usage",
          corejs: 3
          }
      ]
  ]
}