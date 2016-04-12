import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('newUser');
  this.route('user', {path: '/user/:user_id'});
  this.route('show');
>>>>>>> 4a2ff8f24940d35471a8a710ade4266fc49c5617
});

export default Router;
