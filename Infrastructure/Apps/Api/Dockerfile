FROM node:13-alpine3.10

RUN apk add --no-cache --virtual .build-deps 

WORKDIR /usr/app/bisu
COPY ./Infrastructure/Apps/Api/package*.json ./Infrastructure/Apps/Api/

WORKDIR /usr/app/bisu/Infrastructure/Apps/Api
RUN npm install
RUN npm install -g nodemon
COPY ./Infrastructure/Apps/Api/ ./

WORKDIR /usr/app/bisu/Core
COPY ./Core/package*.json ./
RUN npm install
COPY ./Core/ ./

WORKDIR /usr/app/bisu/Infrastructure/Data
COPY ./Infrastructure/Data/package*.json ./
RUN npm install
COPY ./Infrastructure/Data/ ./

WORKDIR /usr/app/bisu/Infrastructure/Apps/Api
EXPOSE 8081 9231
CMD nodemon --inspect=0.0.0.0 --nolazy --legacy-watch app.js