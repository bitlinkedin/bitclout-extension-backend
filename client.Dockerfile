FROM node:alpine As build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run client:build

FROM nginx:alpine as production
ARG PORT
ENV PORT=${PORT}

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html

EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
