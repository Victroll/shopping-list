FROM node:10.16.0-alpine as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN yarn
COPY . /usr/src/app
RUN yarn build
RUN yarn global add serve
EXPOSE 4213
CMD ["serve", "./build/"]