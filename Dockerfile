FROM node:current-slim AS final

RUN mkdir -p /honey/broker/app

WORKDIR /honey/broker/app

ADD . .

RUN yarn install
RUN yarn build

ENV PORT=1883

EXPOSE 1883

CMD yarn start