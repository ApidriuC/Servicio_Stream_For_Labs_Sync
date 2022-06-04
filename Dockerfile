FROM node:15.11.0

WORKDIR /usr/streamsforlab/sync-service


COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .
EXPOSE 9000
CMD [ "npm", "start" ]