import $ from "jquery";
import Backbone from "backbone";

const TweetView = Backbone.View.extend({
  intialize: function(tweet){
    this.tweet = tweet;
  },
  tagName: "div",
  className: "tweet",
  template: function(){
    return `
      <span>X</span>
      <a href="#" class="author">${tweet.get("author")}</a>
      <p class="body">${tweet.get("body")}</p>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default TweetView;
