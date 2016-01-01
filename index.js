/* jshint node: true */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const JS_FILES = ['upup.min.js', 'upup.sw.min.js'];

module.exports = {
  name: 'ember-upup',
  // included: function(app) {
  //   this._super.included(app);
  //
  //   app.import(app.bowerDirectory + '/offline/offline.js');
  // },
  contentFor: function(type, config) {
    if (type === 'head-footer') {
      const fileRefs = JS_FILES.map(file => `<script src='/${file}'></script>`);
      const preamble = '<script>';
      const assets = config.upup.assets || ['assets/*'];
      const options = JSON.stringify({
        'content-url': 'index.html',
        'assets': assets
      });
      const instantiate = `UpUp.start(${options});`;
      const epilog = '</script>';
      return [...fileRefs, preamble, instantiate, epilog].join('\n');
    }
  },
      treeForPublic: function() {
        const upupPath = path.join(this.app.bowerDirectory, 'upup/dist');
        const publicTree = this._super.treeForPublic.apply(this, arguments);
        const trees = [];
        if (publicTree) {
          trees.push(publicTree);
        }
        trees.push(new Funnel(upupPath, {
          include: JS_FILES,
          destDir: '/'
        }));

        return mergeTrees(trees);
      }
};
