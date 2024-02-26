FROM node:20

WORKDIR /app

ARG frontend_url

COPY package*.json ./

ENV FRONTEND_URL=${frontend_url}

RUN npm install

COPY . .

RUN npm run build



EXPOSE 3008
CMD [ "npm", "start" ]
