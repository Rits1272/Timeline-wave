# Timeline-wave

## Motivation

Ever heard of Tech Journalling? The main motive of this web app is to make a **'Tech Journal'** for yourself.

## Features

- Make a frontend for our web app
- Make an Authentication system
- Accept daily progress from the user and make timeline based on daily progress.
- Add the feature of following a user
- Make a reminder system so that the web app notifies the user if no progress is added for that day
- Add the share option to share your timeline on different social handles

## Tech Stack

We will make frontend of our app with **React**. For backend we will make a REST api with **Django Rest Framework**.

## Schedule

#### Phase I (07/12/2019 - 14/12/2019)

FRONTEND : 
- Make frontend for the website.
  - Make a sign in and sign up page
  - Make home page
- Integrate authentication api with the frontend

BACKEND:
- Make authentication api using Django Rest Framework
- Host the api on Heroku
- Make an api for daily progress input by the user

#### Phase II (15/12/2019 - 21/12/2019)

FRONTEND : 
  - Fetch daily progress api and make a timeline
  - Host the website on Heroku
  
BACKEND : 
  - Make a Reminder system which reminds the user to add their daily progress
  - Add the Friends list api so that the user may see their friend's timeline
  
#### Phase III (22/12/2019-28/12/2019)

FRONTEND : 
  - Fetch the Friend list api and show friend list to the user
  - Add the share button so that the user may tweet his timeline in Twitter.
  
BACKEND : 
  - (optional) Add CLI for the website so that user may add his daily progress in the terminal itself.
 
## Installation

BACKEND:
  - clone the backend folder
  - Install **django and django-rest-framework** using pip
  
FRONTEND:
 - clone the frontend folder
 - In the root directory do **npm install or yarn install**
 
## Contribution Guidelines

Please raise a feature request or issue before sending PR for the same.

Follow the below guidelines for proper coding practices:

- Always [create a new branch](https://confluence.atlassian.com/bitbucket/branching-a-repository-223217999.html) for your changes and make PR from it ONLY.
- Write neat code with proper comments.
- Write descriptive commit messages. Please [read this](https://github.com/erlang/otp/wiki/writing-good-commit-messages) for more information.
- Write detailed PR messages and include `fixes #ISSUE_NUMBER` it if closes an issue, otherwise use `concerns #ISSUE_NUMBER` to tag the related issues. Please [refer here](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/) for more PR guidelines.
- It is recommended to have a single commit for a task.
- Use [DRY principles](https://thealphadollar.github.io/learning/2019/05/13/go-dry.html) to create maintainable code.

## Communication

All contributors / users are requested to join [Slack Workspace](https://join.slack.com/t/timelinewave/shared_invite/enQtODQ2Njg1OTU1OTUzLWJiNmJmNjAzYmI0OGI2N2RhZWFhMTliYzI1NmZmN2U5ZTQ3M2YyZGJjYzc0MTdjZTgyNTBlMGU4NGQ5ODYxOWY) for further discussion on ideas, PRs and issues.

For issues please raise a ticket in the issues tab in the [Timeline-Wave github repository](https://www.github.com/rits1272/Timeline-wave).

Mentor for the project: [Ritik Jain](https://www.github.com/rits1272/)
