import Ember from 'ember';

export default Ember.Service.extend({
  bandMates: [],

  add(bandMate) {
    this.get('bandMates').pushObject(bandMate);
  }
});
