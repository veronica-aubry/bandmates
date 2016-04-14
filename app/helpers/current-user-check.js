import Ember from 'ember';

export function currentUserCheck(params, session) {
  var userId = params[0].get('uid');

  if (userId === session.uid) {
    return true;
  }
}

export default Ember.Helper.helper(currentUserCheck);
