# Start from an image that already has Node.js installed
FROM node:22-alpine

# Work inside the /app folder
WORKDIR /app

# Copy the project into the image
COPY . .

# The app listens on port 3000
ENV PORT=3000
EXPOSE 3000

# Do not run as the root user
USER node

# How to start the app
CMD ["node", "server.js"]
