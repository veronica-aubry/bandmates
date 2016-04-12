import Model from 'ember-data/model';

export default Model.extend({
  venue: DS.attr(),
  band: DS.attr(),
  date: DS.attr(),
<<<<<<< HEAD
  attendees: DS.hasMany('user', { async: true }),
=======
  attendees: DS.hasMany('user', { async: true })
>>>>>>> 4a2ff8f24940d35471a8a710ade4266fc49c5617
});
