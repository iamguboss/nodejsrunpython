FROM node:latest

RUN mkdir -p /app

COPY / /app

WORKDIR /app

RUN apt-get update

RUN apt-get install python3

RUN apt install -y python-pip

RUN npm install

CMD [ "npm", "start", "dev"]

EXPOSE 3000