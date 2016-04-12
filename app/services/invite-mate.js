import Ember from 'ember';

export default Ember.Service.extend({
  bandmates: [],

    add(bandmate) {
      this.get('bandmates').pushObject(bandmate);
    }
  });
