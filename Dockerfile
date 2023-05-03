FROM node:alpine

WORKDIR /App

# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN apt-get update
RUN npm i -S serve
RUN npm run build

CMD [ "serve", "-s", "build", "-l", "5000"]