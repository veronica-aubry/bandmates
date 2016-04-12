import Model from 'ember-data/model';

export default Model.extend({
  title: DS.attr(),
  venue: DS.attr(),
  band: DS.attr(),
  date: DS.attr(),
  attendees: DS.hasMany('user' { async: true })
});
