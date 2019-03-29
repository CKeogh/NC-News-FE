# TODO

1. ~~**loading icon for login?**~~
3. stop scroll on re-render
4. animation
5. readme!

# jonny's notes

hey Chris - some notes. Someone (possibly not me) will run through with you today if we get a chance - else early Monday.

Chris K
UX -
~~Not overly sold on the colour scheme but just about presentable~~ :slightly_smiling_face: 

* - ~~A bit of space (padding) works well on your article cards - employ the same ideas in other elements too (Topics nav, login instructions…)~~

* ~~Topics list looks a bit rubbish - flex / space around? Colour contrast too.
In comment card, ‘0’ looks a bit weird out of context (presumably number of votes?)~~
~~No separation of comments makes it hard to tell which the like / dislike buttons are for.~~

* ~~I like the login fixed area, but at narrow widths it will always overlay the header.~~

* ~~**Your like / dislike buttons should not appear to do anything when they are not doing anything (disable?)**~~

* ~~Default button styling could be improved.~~

* ~~New comments aren’t created with like / dislike buttons.~~

* ~~Some responsiveness to the cursor is very useful for accessibility reasons - buttons that change on hover, link text the underlines etc.~~

* ~~**Posting a comment without a body doesn’t do anything - a required attribute could be useful?**~~
* ~~Really like that creating topic takes me to a new article page.~~
* ~~**No affordance on post new article page.**~~

* ~~Going to a non-existent topic doesn’t render the header for some reason.~~
* ~~**??Getting a non-existent article keeps loading forever.??**~~
* ~~I’d rather a media query put the sidebar somewhere else for narrow widths but you just about get away with it.~~


Code -
Looks pretty well organised.
* userData and currentUser seems like a useless and confusing duplication of info.
Not convinced that routing lots of different headers is the best way to handle this - the header may as well be part of the routed component (treat them as ‘pages’)
* You have isolated one Vote component, cool - maybe logic in isolating them as a group too?
* Article card - extract your pluralising into a utils func
* I don’t like the isUpdated in ArticleList - you wouldn’t need that if you used prevProps instead.
* Really lovely to see you applying composition elsewhere! Prob wouldn’t use the Auth pattern as you are with the two children, just as it’s not clear in the parent function.
* A few unused variables dotted around - have a tidy up.
* Avoid ‘alert’ in React - it’s blocking.
On the whole this is pretty swish :slightly_smiling_face:

### 'Must Have' User Stories

1. ~~As a user, I should be able to view a list of all articles.~~
2. ~~As a user, I should be able to view a list of all articles on a specific topic.~~
3. ~~As a user, I should be able to view an individual article.~~
4. ~~As a user, I should be able to view an individual article's comments.~~
5. ~~As a user, I should be able to sort articles by:~~ 
    - ~~date created~~
    - ~~comment_count~~
    - ~~votes~~
6. ~~As a hiring partner with no access to my laptop, I should be able to use the site on my mobile without sacrificing style or functionality.~~
7. ~~**As a user, I should be able to login to the site.**~~
8. ~~**As a hiring partner with no knowledge of the users in the database, it should be very clear to me how I can login to the site.**~~
9. ~~As a logged in user, I should be able to post a new article to an existing topic.~~
10. ~~As a logged in user, I should be able to post a new article to a new topic.~~
11. ~~As a logged in user, I should be able to post a new comment to an existing article.~~
12. ~~**As a logged in user, I should be able to vote on an article.**~~
13. ~~**As a logged in user, I should be able to vote on a comment.**~~
14. ~~As a logged in user, I should be able to delete my own articles.~~
15. ~~As a logged in user, I should be able to delete my own comments.~~
16. As a hiring parter, I should be able to follow the readme instructions to easily run the project locally.
17. As a hiring parter, I should be able to find a link to the hosted version of the project in the readme.
18. As a hiring parter, I should be able to find a link to the back-end repository of the project in the readme.
19. As a hiring parter, I should be able to find a link to the hosted version of the back-end project in the readme.

_**If time...**_

20. **As a user, I should be able to navigate over pages of articles (e.g. using pagination or infinite scroll).**
21. **As a user, I should be able to navigate over pages of comments (e.g. using pagination or infinite scroll).**
22. As a user, I should be able to view a list of all articles written by a specific user.

*Note regarding **BOLD** user stories:*
- User login / auth to be covered in Tuesday's lecture
- Voting / optimistic rendering to be covered in Wednesday's lecture
- Error handling / error pages to be covered in Thursday's lecture
- Infinite scroll / pagination to be covered in Thursday's lecture


### Deployment

We will send out some notes, but have a look at this section of the `create-react-app` docs on how to deploy your app using Netlify: https://facebook.github.io/create-react-app/docs/deployment#netlify-https-wwwnetlifycom

**Before moving onto the 'if time' and 'extra credit' sections, submit your code for review! Please send a link to both your GitHub project and your hosted version to the FE2 slack channel** 😀

### Extra credit

1. Create a route which shows which users have been most active adding articles and comments
2. Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
3. Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.
