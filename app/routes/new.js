import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveUser(params) {
      var ref = new Firebase("https://bandmates2.firebaseio.com");
    var _this = this;

    ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData){
        if (error) {
          alert(error);
        } else {
          _this.get('session').open('firebase', {
            provider: 'password',
            'email': params.email,
            'password': params.password
          }).then(function(){
            var user = _this.store.createRecord('user', {
              id: userData.uid,
              name: params.name,
              image: params.image,
              active: true
            });
            user.save()
            .then(function(){
              _this.transitionTo('index');
            });
        }
     });
    }
  }
});
