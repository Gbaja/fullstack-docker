FROM node:10-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY node_modules .

RUN yarn install 

COPY index.js .

EXPOSE 8000

CMD ["yarn", "run", "server"]