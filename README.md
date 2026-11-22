# DevOps Live

The demo app for the seminar “DevOps in the Real World”. One small web page that travels from a laptop to the internet through Git, a CI pipeline, a Docker container and an automatic deploy.

## Run it

| What | Command |
| --- | --- |
| Run on your laptop | `npm start`, then open http://localhost:3000 |
| Run the tests | `npm test` |
| Build the container image | `docker build -t devops-live .` |
| Run the container | `docker run --init --rm -p 3000:3000 devops-live` |

No `npm install` is needed: the app has zero dependencies.

## Files

- `server.js`: the web page. Change `MESSAGE` and `COLOR` during the demo.
- `app.test.js`: three automated tests.
- `.github/workflows/ci.yml`: the pipeline. It runs the tests, then builds the Docker image.
- `Dockerfile`: the recipe for the container image.
