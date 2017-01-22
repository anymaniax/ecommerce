
FROM node:latest
MAINTAINER Bury-Calapez
LABEL Name=api Version=1.0.0 
COPY api/package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src/app
COPY api/ /usr/src/app
WORKDIR /usr/src/app
EXPOSE 5000
ENV DEBUG=0
CMD node index.js
