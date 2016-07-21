import Backbone from 'backbone';
import settings from '../settings';
import router from '../router';

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
  defaults: {
    username: '',
    authtoken: ''
  },

  parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id
      };
    }
  },
  login: function(username, password, newUrl) {
    this.save({username: username, password: password}, {
      url: newUrl || `https://baas.kinvey.com/user/${settings.appId}/login`,
      success: (model, response) => {
        this.unset('password');
        console.log("logged in");
        router.navigate('feed', {trigger: true});
      },
      error: function(){
        console.log("could not log in");
      }
    });
  }
});

let session = new Session();

export default session;
