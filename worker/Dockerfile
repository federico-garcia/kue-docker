FROM node:4

WORKDIR /app

RUN npm install -g pm2
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules

ADD . /app

#ENV PORT 80
#EXPOSE 80

CMD ["node","worker.js"]

#CMD ["pm2","--no-daemon","start", "consumer.js", "--watch"]