import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUser() {
      var params = {
        name: this.get('name') ? this.get('name') : "Tom",
        image: this.get('image') ? this.get('image') : "http://cos.h-cdn.co/assets/15/25/1434726176-tom.jpg",
        active: true,
        email: this.get('userEmail'),
        password: this.get('userPassword')
      };
      this.sendAction('saveUser', params);
    }
  }
});
