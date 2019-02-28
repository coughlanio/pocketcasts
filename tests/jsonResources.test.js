const sinon = require('sinon');
const PocketCasts = require('../src');
const jsonResources = require('../src/jsonResources');

const sandbox = sinon.createSandbox();

describe('PocketCasts JSON Resources', () => {
  beforeEach(() => {
    sandbox.stub(PocketCasts.prototype, 'get').resolves({});
    this.pocketcasts = new PocketCasts('foo@example.com', 'password');
  });

  afterEach(() => {
    sandbox.restore();
  });

  jsonResources.forEach(({ name, path }) => {
    it(name, async () => {
      await this.pocketcasts[name]();
      sinon.assert.calledOnce(this.pocketcasts.get);
      sinon.assert.calledWith(this.pocketcasts.get, path);
    });
  });
});
