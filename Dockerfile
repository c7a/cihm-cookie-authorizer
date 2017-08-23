FROM node:7.7-alpine

ENV HOME=/home/node
WORKDIR $HOME/cihm-image-authorizer

RUN apk add --update git

COPY config.json package.json yarn.lock index.js ./
RUN chown -R node:node .

USER node
RUN yarn install

EXPOSE 3000
