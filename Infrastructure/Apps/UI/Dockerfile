FROM node:13-alpine3.10 AS compile-image

ENV PATH=./node_modules/.bin:$PATH

WORKDIR /opt/n

COPY ./Infrastructure/Apps/UI/package*.json ./

RUN npm install

COPY ./Infrastructure/Apps/UI/ ./

RUN ng build



FROM nginx:alpine

COPY ./Infrastructure/Apps/UI/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=compile-image /opt/ng/dist/UI /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]