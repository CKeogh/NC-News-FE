# NC News

NC News is a Reddit style content sharing web application designed for the reading and posting of articles.
Users are able to:
* view a list of articles by all users
* view a list of articles based on topic
* sort list of articles by date created / number of votes / number of comments
* create a user account
* sign in to their existing account
* create new topics when logged in
* create new articles when logged in
* vote on articles
* post comments on articles when logged in
* vote on comments
* delete their own articles when logged in
* delete their own comments when logged in

A live deployed version of this app can be found at https://ck-nc-news.netlify.com/

## Running Locally

To install the application locally for development and testing purposes you will first need to fork this repository and then clone to your local machine. Next, cd to the local directory that the repo was cloned to and run the following script in the terminal to ensure all the correct dependencies are installed:
```
npm install
```

Then, to launch the app in the browser run:
```
npm start
```

## Testing and Development

To run the test suites, use ```npm test```. This will run using the *Jest* testing framework. The documentation can be found here:
https://jestjs.io/docs/en/getting-started

The file ```__test__.spec.js``` is made up of unit tests of the utility functions found in the ```utils``` directory

### development

The back end to this application can be viewed here:
https://ck-nc-knews.herokuapp.com/api, along with a breakdown of all the available endpoints.

All of the api requests are extracted to the file ```api.js``` and are made using the *Axios* library.
The documentation for which can be viewed at https://github.com/axios/axios.

To view the Github repo for the back end of this project follow this link:
https://github.com/CKeogh/NC-News-BE


## Author

This application was built by [Chris Keogh](https://github.com/CKeogh).

## Acknowledgments

All the tutors, staff, and fellow students at Northcoders.