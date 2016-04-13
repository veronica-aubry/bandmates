import Ember from 'ember';

export default Ember.Component.extend({
  inviteMate: Ember.inject.service(),

  actions: {
    addBandMate(bandMate) {
      this.get('inviteMate').add(bandMate);
      this.transitionTo('invitePage');
    }
  }
});
