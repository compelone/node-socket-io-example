FROM node:12.20.0

WORKDIR src

COPY src ./src
COPY index.html .
COPY *.js* ./

RUN yarn

CMD npm run dev
