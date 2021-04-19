FROM node:alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:heroku

#FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG PORT
ENV PORT=${PORT}

#WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm install --only=production

#COPY --from=build /dist/server /usr/src/app

EXPOSE $PORT

CMD ["node", "/usr/src/app/dist/server/main"]
