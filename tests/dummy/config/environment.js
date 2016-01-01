/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'unsafe-eval' http://cloudfront.net",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self' http://fonts.gstatic.com http://fonts.googleapis.com",
      'connect-src': "'self'",
      'img-src': "'self' https://npmjs.org https://npmjs.com https://badge.fury.io https://travis-ci.org https://api.travis-ci.org https://codeclimate.com https://*.cloudfront.net http://ak-hdl.buzzfed.com/static/2014-01/enhanced/webdr07/3/11",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    },
    upup: {
      assets: [
        'assets/dummy.css',
        'assets/dummy.js',
        'assets/vendor.css',
        'assets/vendor.js',
        'demo-helper/images/ember-london.png',
        'demo-helper/images/ember-houston.png',
        'demo-helper/images/ember-munich.png',
        'demo-helper/images/ember-philly.png',
        'demo-helper/images/ember-seattle.png',
        'demo-helper/images/emberjs-icon.png'
      ]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
