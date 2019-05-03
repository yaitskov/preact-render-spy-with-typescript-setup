module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    files: ['src/*.spec.js'],
    plugins : ['karma-webpack', 'karma-jasmine',  'karma-chrome-launcher'  ],
    preprocessors: {
      'src/*.spec.js': ['webpack']
    }
  });
};
