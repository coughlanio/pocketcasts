# PocketCasts

Client library for interacting with the PocketCasts WebPlayer API.

[![CircleCI](https://circleci.com/gh/coughlanio/pocketcasts.svg?style=svg)](https://circleci.com/gh/coughlanio/pocketcasts)

## Installation

```
npm install pocketcasts
````

## Usage

```
const PocketCasts = require('pocketcasts');

const pocketcasts = new PocketCasts('username', 'password');

pocketcasts.login()
  .then(pocketcasts.list)
  .then(list => console.log(JSON.stringify(list, null, 4)));
```

## API
The following is a list of API methods available to call once successfully logged in.

### User API Methods
There's a number of API methods available to call to access currently logged-in users resources.

#### list()
Returns a list of the currently logged-in users subscribed podcasts.

#### newReleases()
Returns a list of new releases for the currently logged-in users subscribed podcasts.

#### inProgress()
Returns a list of in-progress episodes for the currently logged-in users subscribed podcasts.

#### starred()
Returns a list of starred episodes for the currently logged-in users subscribed podcasts.

#### history()
Returns a list of previously listened episodes for the currently logged-in user.

#### stats()
Returns a number of stats for the currently logged-in user.

#### recommendedEpisodes()
Returns a list of recommended podcast episodes for the currently logged in user.

### Discover API Methods
There's a number of API methods available to call to access PocketCasts Discover resources.

#### search({term})
Returns search results for the provided search term query.

#### categories()
Returns a list of podcast categories on PocketCasts.

#### content()
Returns a list of themed and regional content currently featuring on PocketCasts.

#### featured()
Returns a list of currently featured content on PocketCasts.

#### networkList()
Returns a list of podcast networks currently featured on PocketCasts.

#### popular()
Returns a list of popular podcasts currently featured on PocketCasts.

#### trending()
Returns a list of trending podcasts currently featured on PocketCasts.