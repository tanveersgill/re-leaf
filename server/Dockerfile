FROM mcr.microsoft.com/playwright:v1.33.0-jammy

ARG GOOGLE_API_KEY
ENV GOOGLE_API_KEY=${GOOGLE_API_KEY}

ENV HOME=/home/pwuser
WORKDIR ${HOME}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]