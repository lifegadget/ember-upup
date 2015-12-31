/* jshint node: true */
'use strict';
const fs = require('fs-extra');
const path = require('path');
const JS_FILES = ['upup.min.js', 'upup.sw.min.js'];

const readFile = function(filePath) {
  let fs = require('fs');
  if (!filePath) {
    return console.log(this.name + ' error: file path not defined');
  }

  // var fullPath = path.join(this.project.root, filePath);
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch(e){
    return console.log(this.name + ' error: file not found: ' + filePath);
  }
};

module.exports = {
  name: 'ember-upup',

  normalizeEntityName: function() {},
  postBuild: function() {
    // we need the two UpUp JS files to reside in the root directory so they
    // have scope to include any/all assets being served
    const source = path.join(__dirname, 'bower_components', 'upup/dist');
    const destination = path.join(__dirname, '/dist');
    JS_FILES.map(file => {
      fs.copy(path.join(source, file), path.join(destination, file), err => {
        if(err) {
          console.error(err);
        }
      });
    });
  },
  contentFor: function(type, config) {
    if (type === 'head-footer') {
      const fileRefs = JS_FILES.map(file => `<script src='/${file}'></script>`);
      const preamble = '<script>';
      const options = JSON.stringify({
        'content-url': 'index.html',
        'assets': [
          'assets/dummy.css',
          'assets/dummy.js',
          'assets/dummy.map',
          'assets/vendor.css',
          'assets/vendor.js',
          'assets/vendor.map',
          'demo-helper/images/ember-london.png',
          'demo-helper/images/ember-houston.png',
          'demo-helper/images/ember-munich.png',
          'demo-helper/images/ember-philly.png',
          'demo-helper/images/ember-seattle.png',
        ]
      });
      const instantiate = `UpUp.start(${options});`;
      const epilog = '</script>';
      return [...fileRefs, preamble, instantiate, epilog].join('\n');
    }
  }
};
