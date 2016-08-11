FROM node:4

WORKDIR /app

RUN npm install -g pm2
ADD package.json /app/package.json
#RUN npm config set registry http://registry.npmjs.org
RUN npm install
RUN mv /app/node_modules /node_modules

ADD . /app

EXPOSE 3000

CMD ["pm2", "--no-daemon", "start", "index.js", "--watch"]