var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
