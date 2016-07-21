import $ from "jquery";
import Backbone from "backbone";
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
            router.navigate("feed", {trigger: true});
            console.log("created tweet");
        }, error: function(response){
          console.log(response);
        }
    });
  },
  template: function(){
    let toReturn = `
    <div class="new-tweet">
      <textarea placeholder="Tweet something"></textarea>
      <button class="addTweet">Post</button>
    </div>
    <div class="feed">`;
    tweetCollection.forEach(function(tweet){
      toReturn += TweetView(tweet).el;
    });
    toReturn += `</div>`;
    return toReturn;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default FeedView;
