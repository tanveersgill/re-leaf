FROM mcr.microsoft.com/playwright:v1.33.0-jammy

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]