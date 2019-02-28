const request = require('request-promise-native');
const resources = require('./resources');

module.exports = class PocketCasts {
  constructor(email, password) {
    this.api = 'https://api.pocketcasts.com';
    this.lists = 'https://lists.pocketcasts.com/';
    this.email = email;
    this.password = password;
    this.token = null;

    this.request = request.defaults({ jar: true });

    resources.forEach(({ name, path, method }) => {
      PocketCasts.prototype[name] = this[method].bind(this, path);
    });
  }

  /**
   * Login using PocketCasts WebPlayer Account Credentials.
   *
   * @returns Promise.
   */
  async login() {
    return this.post('/user/login', {
      email: this.email,
      password: this.password,
      scope: 'webplayer',
    })
      .then(({ token }) => {
        this.token = token;
        return true;
      });
  }

  /**
   * Make a POST request with token-based authorization.
   *
   * @param {String} path The API path.
   * @param {Boolean} json The JSON body.
   * @returns Promise.
   */
  post(path, json = {}) {
    const options = {
      method: 'POST',
      uri: `${this.api}/${path}`,
      headers: path === '/user/login' || {
        Authorization: `Bearer ${this.token}`,
      },
      json,
    };

    return this.request(options);
  }

  /**
   * Make a GET request for static JSON resources.
   *
   * @param {String} path The JSON path.
   * @returns Promise.
   */
  get(path) {
    const options = {
      method: 'GET',
      uri: `${this.lists}/${path}.json`,
      json: true,
    };

    return this.request(options);
  }
};
