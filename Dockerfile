FROM node:10.16.0-alpine as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN yarn
COPY . /usr/src/app
RUN yarn build

FROM nginx:1.15.9-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]