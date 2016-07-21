import $ from "jquery";
import Backbone from "backbone";
import settings from "./settings";
import session from "./models/username";
import LoginView from "./views/loginView";
import SignupView from "./views/signupView";
import FeedView from "./views/feedView";
import tweetCollection from "./collections/tweets";


const Router = Backbone.Router.extend({
  routes: {
    login: "loginFunction",
    signup: "signupFunction",
    logout: "logoutFunction",
    feed: "feedFunction"
  },
  loginFunction: function(){
    let login = new LoginView();
    login.render();
    $(".container").empty().append(login.$el);
    $("header h2").text("");
    $(".logoutLink").addClass("hidden");
  },
  signupFunction: function(){
    let signup = new SignupView();
    signup.render();
    $(".container").empty().append(signup.$el);
    $("header h2").text("");
    $(".logoutLink").addClass("hidden");
  },
  logoutFunction: function(){
    session.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
      success: function() {
        session.clear();
      }
    });
    this.navigate('login', {trigger: true});
  },
  feedFunction: function(){
    tweetCollection.fetch({
      header: {
        Authorization: `Basic ${settings.basicAuth}`
      }, success: function(){
        let feed = new FeedView();
        feed.render();
        $(".container").empty().append(feed.$el);
        $("header h2").text(`Welcome, ${session.get("username")}`);
        $(".logoutLink").removeClass("hidden");
      }
    });
  }
});

const router = new Router();

export default router;
