const assert = require('assert');
const PocketCasts = require('../src');

const pocketcasts = new PocketCasts('email', 'password');

(async () => {
  const loggedIn = await pocketcasts.login();
  assert(loggedIn);

  const { podcasts } = await pocketcasts.list();
  assert(podcasts.length);
})();
