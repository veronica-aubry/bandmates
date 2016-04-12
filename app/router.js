import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('newUser');
  this.route('user', {path: '/user/:user_id'});
  this.route('show', {path: '/show/:show_id'});
});

export default Router;
