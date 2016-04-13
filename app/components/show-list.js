import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('show');
  },
  sortBy: ['date:asc'],
  sortedShows: Ember.computed.sort('model', 'sortBy')
});
