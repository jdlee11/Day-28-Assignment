import $ from "jquery";
import Backbone from "backbone";
import _ from "underscore";
import session from "../models/username";
import tweetCollection from "../collections/tweets";
import router from "../router";
import TweetView from "./tweetView";
import settings from "../settings";

const FeedView = Backbone.View.extend({
  tagName: "div",
  className: "feed-container",
  events: {
    "click .addTweet": "postFunction"
  },
  postFunction: function(evt){
    evt.preventDefault();
    tweetCollection.create({
        author: session.get("username"),
        body: $("textarea").val()
    }, {
        success: function(response){
            router.navigate("", {trigger: false});
            router.navigate("feed", {trigger: true});
        }, error: function(response){
          console.log(response);
        }
    });
  },
  template: function(){
    return `
    <div class="new-tweet">
      <textarea placeholder="Tweet something"></textarea>
      <button class="addTweet">Post</button>
    </div>
    <div class="feed"></div>`;
  },
  render: function() {
    this.$el.html(this.template());
    tweetCollection.each((tweet) => {
      var tweetDiv = new TweetView({model: tweet});
      tweetDiv.render();
      this.$el.find(".feed").prepend(tweetDiv.$el);
    });
    return this;
  }
});

export default FeedView;
