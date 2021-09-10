FROM theconversation/node AS app

# Add files required for storybook
COPY package*.json /app/
COPY babel.config.js /app/
COPY src/ /app/

# Install node modules
RUN npm install --loglevel error
