FROM node:latest

WORKDIR /App

# ENV PATH /app/node_modules/.bin:$PATH

COPY . .

# RUN apt update
RUN npm install -S serve
RUN npm run build

CMD [ "serve", "-s", "build", "-l", "5000"]
# CMD [ "npm", "start" ]