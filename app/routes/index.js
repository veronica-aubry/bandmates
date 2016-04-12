import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
  model() {
    return this.store.findAll('show');
=======
  model(params) {
    return Ember.RSVP.hash({
      shows: this.store.findAll('show'),
      users: this.store.findAll('user')
    })
>>>>>>> 7804a1d6f2af065839d571138013e5b662ede521
  }
});
