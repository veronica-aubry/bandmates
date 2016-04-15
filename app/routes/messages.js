import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login')
    }
  },
  model(params) {
    return Ember.RSVP.hash({
      recipient: this.store.findRecord('user', params.user_id),
      sender: this.store.find('user', this.get('session').get('uid'))
    });
  },

  actions: {
    sendMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();

      params.sender.get('sent').addObject(newMessage);
      params.sender.save();

      params.recipient.get('inbox').addObject(newMessage);
      params.recipient.save();

      this.transitionTo('inbox');
    }
  }
});
