import Model from 'ember-data/model';

export default Model.extend({
  sender: DS.belongsTo('user', {inverse: 'inbox'}),
  recipient: DS.belongsTo('user', {inverse: 'sent'}),
  body: DS.attr()

});
