FROM node

WORKDIR /airbnb-clone

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN npm i -g yarn -f
RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./ormconfig.json .

WORKDIR $HOME/packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "dist/index.js"]