import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveShow() {
      var params = {
        venue: this.get('venue') ? this.get('venue') : "House of Blues",
        band: this.get('band') ? this.get('band') : "They Might Be Giants",
        image: this.get('image'),
        date: this.get('date') ? this.get('date') : "05-14"
      };
      this.sendAction('saveShow', params);
    }
  }
});
