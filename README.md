# PocketCasts

Client library for interacting with the PocketCasts WebPlayer API.

[![CircleCI](https://circleci.com/gh/coughlanio/pocketcasts.svg?style=svg)](https://circleci.com/gh/coughlanio/pocketcasts) ![Actions Status](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/badge/coughlanio/pocketcasts)

You can see it in action [here.](https://podcasts.coughlan.dev/)

## Installation

```
npm install pocketcasts
````

## Usage

```
const assert = require('assert');
const PocketCasts = require('pocketcasts');

const pocketcasts = new PocketCasts('email', 'password');

pocketcasts.login()
  .then(() => pocketcasts.getList())
  .then(({ podcasts }) => assert(podcasts.length));
```

```
const assert = require('assert');
const PocketCasts = require('pocketcasts');

const pocketcasts = new PocketCasts('email', 'password');

(async () => {
  const loggedIn = await pocketcasts.login();
  assert(loggedIn);

  const { podcasts } = await pocketcasts.getList();
  assert(podcasts.length);
})();
```

## API
The following is a list of API methods available to call once successfully logged in.

#### getList()
Returns a list of the currently logged-in users subscribed podcasts.
```
POST user/podcast/list
```

#### getNewReleases()
Returns a list of new releases for the currently logged-in users subscribed podcasts.
```
POST user/new_releases
```

#### getInProgress()
Returns a list of in-progress episodes for the currently logged-in users subscribed podcasts.
```
POST user/in_progress
```

#### getStarred()
Returns a list of starred episodes for the currently logged-in users subscribed podcasts.
```
POST user/starred
```

#### getHistory()
Returns a list of previously listened episodes for the currently logged-in user.
```
POST user/history
```

#### getStats()
Returns a number of stats for the currently logged-in user.
```
POST user/stats/summary
```

#### getRecommendedEpisodes()
Returns a list of recommended podcast episodes for the currently logged in user.
```
POST discover/recommend_episodes
```

#### getSearchResults({ term })
Returns search results for the provided search term query.
```
POST discover/search
```

#### getCategories()
Returns a list of podcast categories on PocketCasts.
```
GET categories_v2
```

#### getContent()
Returns a list of themed and regional content currently featuring on PocketCasts.
```
GET content
```

#### getFeatured()
Returns a list of currently featured content on PocketCasts.
```
GET featured
```

#### getNetworkList()
Returns a list of podcast networks currently featured on PocketCasts.
```
GET network_list_v2
```

#### getPopular()
Returns a list of popular podcasts currently featured on PocketCasts.
```
GET popular
```

#### getTrending()
Returns a list of trending podcasts currently featured on PocketCasts.
```
GET trending
```
