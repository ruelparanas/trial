// DevOps Live: the demo app for the seminar.
// A tiny web page with zero dependencies, so it runs anywhere Node.js runs.

const http = require('node:http');

// Change these two lines during the demo.
const MESAGE = 'Hello, IT students!';
const COLOR = '#1F6FEB';

// The hosting platform tells us which commit is running (Render sets RENDER_GIT_COMMIT).
const VERSION = (process.env.APP_VERSION || process.env.RENDER_GIT_COMMIT || 'local').slice(0, 7);

function page() {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DevOps Live</title>
<style>
  body { margin: 0; min-height: 100vh; display: flex; flex-direction: column;
         align-items: center; justify-content: center; gap: 16px;
         background: ${COLOR}; color: #fff; font-family: system-ui, sans-serif; text-align: center; }
  h1 { font-size: clamp(2rem, 8vw, 5rem); margin: 0 24px; }
  p { font-size: 1.2rem; opacity: 0.85; margin: 0; }
</style>
</head>
<body>
  <h1>${MESSAGE}</h1>
  <p>Deployed automatically by a CI/CD pipeline</p>
  <p>Version: ${VERSION}</p>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page());
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`DevOps Live running on http://localhost:${port}`));
}

module.exports = { page, server, MESSAGE };
