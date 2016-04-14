import Ember from 'ember';

export function currentUserCheck(params) {
  var userId = params[0].id;
  var activeUserId = params[1].id;

  if (userId == activeUserId) {
    return 'display:none';
  }
}


export default Ember.Helper.helper(currentUserCheck);
