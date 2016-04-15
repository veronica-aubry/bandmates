import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login')
    }
  },
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      activeUser: this.store.find('user', this.get('session').get('uid'));
    });
  }
});
