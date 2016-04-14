import Ember from 'ember';

export default Ember.Component.extend({
  inviteMate: Ember.inject.service(),

  actions: {
    addBandMate(user, show) {
      this.get('inviteMate').add(user);
      this.get('inviteMate').add(show);
      alert("Your invite has been sent!");
    },
    ifSelf(params) {
      var sessionId = this.get('session').get('uid');
      var userId = user.id;

      console.log(sessionId);
      console.log(userId);

      return true;
    }
  }
});
