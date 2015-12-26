/* jshint node: true */
'use strict';
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-upup',
  treeForApp: function(tree) {
    console.log('treeForApp');
    tree = new Funnel(tree, { include:
      [
        'bower_components/upup/dist/upup.min.js',
        'bower_components/upup/dist/upup.sw.min.js'
      ]});

    return this._super.treeForApp.call(this, tree);
  },
  contentFor: function(type, config) {
    if (type === 'head-footer') {
      const preamble = '<script>';
      const upup = readFile('bower_components/upup/dist/upup.min.js');
      const sw = readFile('bower_components/upup/dist/upup.sw.min.js');
      const config = JSON.stringify({
        'content-url': 'index.html',
        'assets': [
          'assets/dummy.css',
          'assets/dummy.js',
          'assets/dummy.map',
          'assets/vendor.css',
          'assets/vendor.js',
          'assets/vendor.map'
        ]
      });
      const instantiate = `UpUp.start(${config});`
      const epilog = '</script>';
      return [preamble, upup, sw, instantiate, epilog].join('\n');
    }
  }
};

const readFile = function(filePath) {
  let fs = require('fs');
  let path = require('path');
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
