/* jshint node: true */

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'upup', target: '0.2.0'}
      // {name: 'offline', target: '0.7.14'}
    ]);
  }
};
