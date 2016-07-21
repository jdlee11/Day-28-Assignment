import $ from "jquery";
import Backbone from "backbone";
import tweetCollection from "../collections/tweets";
import router from "../router";
import session from "../models/username";

const TweetView = Backbone.View.extend({
  initialize: function(){
    this.id = this.model.get("_id");
  },
  tagName: "div",
  className: "tweet",
  events: {
    "click span": "deleteFunction"
  },
  deleteFunction: function() {
    console.log(this.id);
    tweetCollection.get(this.id).destroy({
      success: function(){
        console.log("success");
        router.navigate("", {trigger: false});
        router.navigate("feed", {trigger: true});
      }
    });
  },
  template: function() {
    var toReturn = "";
    if (session.get("username") === this.model.get("author")){
      toReturn += `<span>X</span>`;
    }
    toReturn += `
      <a href="#" class="author">${this.model.get("author")}</a>
      <p class="body">${this.model.get("body")}</p>
    `;
    return toReturn;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default TweetView;
