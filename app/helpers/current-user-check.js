import Ember from 'ember';

export function currentUserCheck(params) {
  var userId = params[0].id;
  var activeUserId = params[1].id;

  if (userId !== activeUserId) {
    return Ember.String.htmlSafe("<button class='btn' {{action 'addBandMate' user show}}>Invite this bandmate</button>"); 
  }

}


export default Ember.Helper.helper(currentUserCheck);
