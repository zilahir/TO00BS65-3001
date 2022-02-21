FROM node:16.14.0

WORKDIR /usr/src/app

# RUN npm rebuild node-sass --sass-binary-name = linux-x64-64

RUN npm install -g typescript

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040 5550

#Build to project
RUN npm run build

# Run node server
CMD npm run start
