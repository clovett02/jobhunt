FROM node

WORKDIR /App

COPY . .

CMD [ "npm", "start" ]