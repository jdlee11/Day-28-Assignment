# Making the Day-28 Tweeting App

## initial styling
- I like to start off each app with a little styling, just to make things visually appealing throughout the whole testing process later.
- I add elements in the html such as the login page and tweet display so I can apply their styles

## structuring MVCs
- after getting some basic html and styling, I create the file structure for the project. In this case, I have a model for each individual tweet, which all belong to a tweets collection. I also have a username model that stores information on the current session. For views, I have a loginView for existing users, a signupView for new users, and a feedView which displays the feed to the current user.

## router issue
- I am fleshing out code bit by bit, but the router is giving me trouble. I tried console logging "log in" as the first thing to happen in the loginFunction, called by routing to "login" in the URL. Nothing. Same when I tried console logging in other router functions. So, I conclude that at the moment, my router is not even listening to hash changes, since the (seemingly) exact same syntax works in previous programs.

##  fixed
- misspelled routes as router.....**important note** double check spelling, it causes a lot of errors and can easily go unnoticed

## sign up vs log in
- to keep things simple, I modified the login function on the Session model to allow a user to provide a url along with the username and password. The url is then used in the .save ajax call. If left undefined, the url is the urlRoot of the Session model. In my code, the signupView's submitFunction passes a url to Session.login which serves as the url to which new users are saved. Tested it out by registering a new username and password, then refreshed to log in again. I signed in successfully.

## logging out error
- 400 Bad Request upon logging out, maybe its another typo. It navigates me to the login page, which is good, so it does not **appear** to have broken things.
