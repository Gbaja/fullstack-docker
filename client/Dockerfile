# Tell docker we want to use this node image
FROM node:8.7.0-alpine

# Create a directory in the container to hold the app
# -p flag is to....
RUN mkdir -p /app/client
# Go into the container app folder and make it working directory
WORKDIR /app/client

# Copy the local package.json and yarn.lock into the container folder
COPY package.json /app/client
COPY yarn.lock /app/client

## install the modules that the project needs
RUN yarn install --ignore-engines

# Copy the local code into the container folder
COPY . /app/client

EXPOSE 8001

CMD ["yarn", "run", "client"]
