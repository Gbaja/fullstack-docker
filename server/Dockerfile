# Tell docker we want to use this node image
FROM node:8.7.0-alpine

# Create a directory in the container to hold the app
# -p flag is to....
RUN mkdir -p /usr/src/app/server
# Go into the container app folder and make it working directory
WORKDIR /usr/src/app/server

# Copy the local package.json and yarn.lock into the container folder
COPY package.json /usr/src/app/server
COPY yarn.lock /usr/src/app/server

## install the modules that the project needs
RUN yarn install

# Copy the local code into the container folder
COPY . /usr/src/app/server

EXPOSE 8000

CMD ["yarn", "start:server]
