FROM node:14-alpine

WORKDIR /App

# ENV PATH /app/node_modules/.bin:$PATH

COPY . .

# RUN apt update
RUN npm install -g serve
RUN npm run build

CMD [ "serve", "-s", "build", "-l", "5000"]
# CMD [ "npm", "start" ]