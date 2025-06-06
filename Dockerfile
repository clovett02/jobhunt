FROM node:24-alpine AS build

WORKDIR /App
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /App
COPY --from=build /App/dist/ .
RUN npm install -g serve
CMD [ "serve", "-s", ".", "-l", "5000"]
