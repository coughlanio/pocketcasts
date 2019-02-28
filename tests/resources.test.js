const sinon = require('sinon');
const PocketCasts = require('../src');
const resources = require('../src/resources');

const sandbox = sinon.createSandbox();

describe('PocketCasts API Resources', () => {
  beforeEach(() => {
    sandbox.stub(PocketCasts.prototype, 'post').resolves({});
    sandbox.stub(PocketCasts.prototype, 'get').resolves({});
    this.pocketcasts = new PocketCasts('foo@example.com', 'password');
  });

  afterEach(() => {
    sandbox.restore();
  });

  resources.forEach(({ name, path, method }) => {
    it(name, async () => {
      await this.pocketcasts[name]();
      sinon.assert.calledOnce(this.pocketcasts[method]);
      sinon.assert.calledWith(this.pocketcasts[method], path);
    });
  });
});
