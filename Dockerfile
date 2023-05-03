FROM node

WORKDIR /App

COPY . .

RUN apt-get update
RUN npm install -g serve
RUN npm run build

CMD [ "serve", "-s", "build" ]