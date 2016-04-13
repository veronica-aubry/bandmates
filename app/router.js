import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new');
  this.route('user', {path: '/user/:user_id'});
  this.route('show', {path: '/show/:show_id'});
  this.route('inviteList');
  this.route('invitePage');
  this.route('admin');
});

export default Router;
