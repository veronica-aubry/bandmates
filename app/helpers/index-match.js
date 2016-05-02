import Ember from 'ember';

export function indexMatch(params) {
  var userShows = params[0].shows;
  var activeUserShows = params[1].shows;

 for (var i = 0; i < activeUserShows.length; i++) {
   for (var j = 0; j < userShows.length; j++) {
     if (activeUser[i] == userShows[j]) {
       console.log(params[0]);
     }
   }
 }
}


export default Ember.Helper.helper(currentUserCheck);
