FROM us-docker.pkg.dev/tc-platform-artifacts/theconversation/node:16.14.2

# Add files required for storybook
COPY package*.json /app/
COPY babel.config.js /app/
COPY src/ /app/

# Install node modules
RUN npm install --loglevel error
