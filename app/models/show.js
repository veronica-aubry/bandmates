import Model from 'ember-data/model';

export default Model.extend({
  venue: DS.attr(),
  band: DS.attr(),
  date: DS.attr(),
  attendees: DS.hasMany('user', { async: true }),
});
