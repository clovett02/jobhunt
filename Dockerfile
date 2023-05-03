FROM node

WORKDIR /App

COPY . .

# RUN apt-get update
# RUN npm i -S serve
# RUN npm run build

# CMD [ "serve", "-s", "build" ]

CMD [ "npm", "start" ]