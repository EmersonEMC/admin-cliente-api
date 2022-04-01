FROM node:16.14.2-alpine3.14

ENV NODE_ENV=development

ARG TZ='America/Sao_Paulo'

ENV TZ ${TZ}

RUN apk upgrade --update \
    && apk add --no-cache bash \
    && apk add -U tzdata \
    && cp /usr/share/zoneinfo/${TZ} /etc/localtime \
    && rm -rf \
    /var/cache/apk/*

RUN npm i -g @nestjs/cli@8.2.4

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY . .
