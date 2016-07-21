import $ from "jquery";
import Backbone from "backbone";
import settings from "../settings";
import Tweet from "../models/tweet";

const Tweets = Backbone.Collection.extend({
  model: Tweet,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/tweets`
});

let tweetCollection = new Tweets();

export default tweetCollection;
