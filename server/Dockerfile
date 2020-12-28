FROM node:12.20.0 AS build

WORKDIR app

COPY *.js* ./

RUN yarn


FROM node:12.20.0

WORKDIR app

COPY --from=build /app .

CMD node index.js


