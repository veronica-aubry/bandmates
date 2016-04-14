import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return Ember.RSVP.hash({
  //     shows: this.store.findAll('show'),
  //     user: (if (!this.get('session').get('uid')) {
  //       return this.find('user', c76cd9da-08cd-4741-a4d5-5ce4ec532e1d);
  //     } else {
  //       return this.find('user', this.get('session').get('uid'));
  //     })
  //   });
  // }

  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login')
    }
  },
  model() {
    return Ember.RSVP.hash({
      shows: this.store.findAll('show'),
      user: this.store.find('user', this.get('session').get('uid'))
    })
  }
});
