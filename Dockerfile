FROM node:22.13

WORKDIR /usr

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3000

CMD [ "npm", "run", "start" ]