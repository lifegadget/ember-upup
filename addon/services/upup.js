import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge, computed: { equal } } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export default Ember.Service.extend({
  state: 'up',
  isUp: equal('state', 'up'),
  isDown: equal('state', 'down'),
  check() {
    return get(this, 'offline').check();
  },

  init() {
    this._super(...arguments);
    this.set('browserSupport', window.navigator.serviceWorker ? true : false);
  }

});
