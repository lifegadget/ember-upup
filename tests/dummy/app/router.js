import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('uk');
  this.route('munich');
  this.route('seattle');
  this.route('houston');
  this.route('philly');
});

export default Router;
