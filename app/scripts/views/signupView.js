import $ from "jquery";
import Backbone from "backbone";
import session from "../models/username";
import settings from "../settings";

const SignupView = Backbone.View.extend({
  tagName: "div",
  className: "signup",
  events: {
    "click .submit": "submitFunction"
  },
  submitFunction: function(evt){
    let username = this.$(".name").val();
    let password = this.$(".password").val();
    evt.preventDefault();
    session.login(username, password, `https://baas.kinvey.com/user/${settings.appId}/`);
  },
  template: function() {
    return `
    <h1>Sign up</h1>
    <input class="name" type="text" placeholder="choose username" />
    <input class="password" type="password" placeholder="choose password" />
    <button class="submit">Sign up</button>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default SignupView;
