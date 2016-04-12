import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      shows: this.store.findAll('show'),
      users: this.store.findAll('user')
    })
  }
});
