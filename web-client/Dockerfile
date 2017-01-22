FROM node:latest
MAINTAINER Bury-Calapez
LABEL Name=web-client Version=1.0.0 
RUN mkdir -p /usr/src/app       
COPY web-client/ /usr/src/app
RUN cd /usr/src/app && npm install --production
WORKDIR /usr/src/app
EXPOSE 3000
ENV DEBUG=0
CMD npm start