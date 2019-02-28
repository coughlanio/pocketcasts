const sinon = require('sinon');
const { expect } = require('chai');
const PocketCasts = require('../src');

const sandbox = sinon.createSandbox();

describe('PocketCasts', () => {
  beforeEach(() => {
    sandbox.stub(PocketCasts.prototype, 'post').resolves({});
    this.pocketcasts = new PocketCasts('foo@example.com', 'password');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('login', async () => {
    const loggedIn = await this.pocketcasts.login();

    expect(loggedIn).to.be.true;

    sinon.assert.calledOnce(this.pocketcasts.post);
    sinon.assert.calledWith(this.pocketcasts.post, '/user/login', {
      email: 'foo@example.com',
      password: 'password',
      scope: 'webplayer',
    });
  });
});
