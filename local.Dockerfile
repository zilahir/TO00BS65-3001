FROM node:16.4.2

WORKDIR /usr/src/app

RUN npm install -g nodemon

RUN npm install -g typescript

EXPOSE 4040 5550