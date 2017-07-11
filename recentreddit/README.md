Coding Challenge

This challenge will help us evaluate your coding skills to check if you would be a good fit for the position. It is not designed to take a long time; preferably no more than 1 hour and 45 minutes.


Directions

Our CEO is a huge user of Reddit. We want you to build a tool for her to use. Specifically, she’s requested a tool that allows her to browse any user’s recent activity on Reddit. The app should allow a user to enter a Reddit username, and then display a list of the corresponding user’s most recent comments and posts. Here are some more detailed instructions:
* This should be a purely frontend app.
* You may use any JavaScript frameworks or libraries you want.
* Our CEO wants to be able to see the user’s 25 most recent comments and the 25 most recent posts.
* To fetch the correct data for a user’s posts, make a GET request to https://www.reddit.com/user/:username/submitted.json
* To fetch the correct data for a user’s comments, make a GET request to https://www.reddit.com/user/:username/comments.json
* To see what the data looks like on reddit, simply remove the ‘.json’ from the url.
* You can decide how you want to present the comments and posts. Please at least include the following data:
    * For the posts, include the Title, Score, and link to the post.
    * For the comments, include the Body, Score, and link to the post that the comment was submitted under.
* Please organize the comments and posts by score from highest to lowest.
* For a relatively safe for work Reddit username to test, use ‘kijafa’.
