# TODO

1. ~~fix floatbar bug~~
2. **loading icon for login?**
3. ~~comments not in any order~~
4. remove isUpdating 
5. extract any utils and write tests
6. header router
7. isolate whole vote component?
8. stop scroll on re-render
9. tidy layout of mobile floatbar
* readme!

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