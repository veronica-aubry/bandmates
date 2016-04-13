import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(params) {
      this.get('session').open('firebase', {
           provider: 'password',
           email: params.email,
           password: params.password
      }).then(function() {
          this.transitionTo('application');
      }.bind(this));
    }
  }
});
