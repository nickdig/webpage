FROM node:alpine

COPY ./main.js /srv/main.js
COPY ./secure /srv/secure

WORKDIR /srv/

RUN npm install express
CMD ["node", "main.js"]
