import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session').get('uid')) {
      this.transitionTo('login')
    }
  },
  model(params) {
    return Ember.RSVP.hash({
      show: this.store.findRecord('show', params.show_id),
      user: this.store.find('user', this.get('session').get('uid'))
    });
  },
  actions: {
    addToUserShows(user, show) {
      console.log(user.shows);
      show.get('attendees').addObject(user);
      show.save();

      user.get('shows').addObject(show);
      user.save();
      this.transitionTo('index');
    }
  }
});
