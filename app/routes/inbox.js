import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login')
    }
  },
  model() {
      return this.store.find('user', this.get('session').get('uid'));
    }
});
