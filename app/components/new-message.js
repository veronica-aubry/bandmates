import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendMessage(recipient, sender) {
      var params = {
        body: this.get('body'),
        sender: sender,
        recipient: recipient
      };
      console.log(params.sender);
      console.log(params.recipient);
      this.sendAction('sendMessage', params);
    }
  }
});
