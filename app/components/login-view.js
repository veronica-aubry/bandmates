import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login() {
      var params = {
        email: this.get('userEmail'),
        password: this.get('userPassword')
      };
      this.sendAction('login', params);
    }
  }
});
