import Ember from 'ember';
// import Firebase from 'ember-firebase';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('show');
  },
  actions: {
    saveShow(params) {
      var ref = new Firebase("https://bandmates2.firebaseio.com");
      var _this = this;

      ref.createRecord('show',
        {
          venue : params.venue,
          band : params.band,
          date : params.date
        });
      show.save()
      .then(function() {
        _this.transitionTo('index');
      });
    }
  }
});
