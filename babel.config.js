const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: "defaults"
      }
    ]
];
  
module.exports = { presets };