import Ember from 'ember';

export default Ember.Component.extend({
  attendees: Ember.computed('show.attendees', function() {
    return this.get('show.attendees');
  })
});
