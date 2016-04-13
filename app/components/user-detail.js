import Ember from 'ember';

export default Ember.Component.extend({
  inviteMate: Ember.inject.service(),

  actions: {
    addBandMate(user, show) {
      // debugger;
      this.get('inviteMate').add(user);
      this.get('inviteMate').add(show);
      alert("Your invite has been sent!");
    },
  }
});
