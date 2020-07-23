FROM node:7
WORKDIR /app/server
COPY package.json /app/server
COPY yarn.lock /app/server
RUN yarn install --ignore-engines
COPY . /app/server
EXPOSE 8000
CMD ["yarn", "run", "server"]