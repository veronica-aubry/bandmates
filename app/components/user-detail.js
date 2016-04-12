import Ember from 'ember';

export default Ember.Component.extend({
  inviteMate: Ember.inject.service(),

  actions: {
        addBandMate(answer) {
          this.get('inviteMate').add(answer);
        }
      }
  });
