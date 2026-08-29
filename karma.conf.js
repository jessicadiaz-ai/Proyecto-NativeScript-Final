module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/**/*.spec.ts'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-nativescript-unicorns'),
      require('karma-junit-reporter')
    ],
    reporters: ['progress', 'junit'],

    // Configuración requeriida para generar la salida del JUnit Reporter
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browser: [],
    singleRun: true
  });
};
