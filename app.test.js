// Automated tests. Run them with: npm test
const test = require('node:test');
const assert = require('node:assert');
const { page, server, MESSAGE } = require('./server');

test('the page shows the message as its headline', () => {
  assert.ok(page().includes(`<h1>${MESSAGE}</h1>`));
});

test('the message is not empty', () => {
  assert.ok(MESSAGE.trim().length > 0);
});

test('the health check answers ok', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/health`);
  assert.strictEqual(res.status, 200);
  assert.strictEqual(await res.text(), 'ok');
  server.close();
});
