const sinon = require('sinon');
const PocketCasts = require('../src');
const apiResources = require('../src/apiResources');

const sandbox = sinon.createSandbox();

describe('PocketCasts API Resources', () => {
  beforeEach(() => {
    sandbox.stub(PocketCasts.prototype, 'post').resolves({});
    this.pocketcasts = new PocketCasts('foo@example.com', 'password');
  });

  afterEach(() => {
    sandbox.restore();
  });

  apiResources.forEach(({ name, path }) => {
    it(name, async () => {
      await this.pocketcasts[name]();
      sinon.assert.calledOnce(this.pocketcasts.post);
      sinon.assert.calledWith(this.pocketcasts.post, path);
    });
  });
});
