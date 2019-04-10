FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN apt-get update; apt-get install -y ffmpeg
COPY . .
CMD [ "npm", "start" ]
