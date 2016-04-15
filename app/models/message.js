import Model from 'ember-data/model';

export default Model.extend({
  sender: DS.belongsTo(),
  recipient: DS.belongsTo(),
  body: DS.attr(),

});
