import $ from "jquery";
import Backbone from "backbone";
import session from "../models/username";
import router from "../router";

const LoginView = Backbone.View.extend({
  tagName: "div",
  className: "login",
  events: {
    "click .submit": "submitFunction",
    "click .new-user": "newUserFunction"
  },
  submitFunction: function(evt){
    let username = this.$(".name").val();
    let password = this.$(".password").val();
    evt.preventDefault();
    session.login(username, password);
  },
  newUserFunction: function(evt){
    evt.preventDefault();
    router.navigate("signup", {trigger: true});
  },
  template: function() {
    return `
    <h1>Log in</h1>
    <input class="name" type="text" placeholder="username" />
    <input class="password" type="password" placeholder="password" />
    <button class="submit">Log in</button>
    <button class="new-user">Sign up</button>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});


export default LoginView;
