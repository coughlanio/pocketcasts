const assert = require('assert');
const PocketCasts = require('../src');

const pocketcasts = new PocketCasts('email', 'password');

pocketcasts.login()
  .then(() => pocketcasts.list())
  .then(({ podcasts }) => assert(podcasts.length));
