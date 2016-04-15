import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login');
    }
  },
  model() {
    return Ember.RSVP.hash({
      shows: this.store.findAll('show'),
      user: this.store.find('user', this.get('session').get('uid'))
    })
  }
});
