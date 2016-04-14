import Ember from 'ember';

export function currentUserCheck(params) {
  // var userId = params[0].id;
  // var session = params[1].uid;

  // console.log(session);
  console.log(params[0]);
  console.log(params[1]);

  }


export default Ember.Helper.helper(currentUserCheck);
