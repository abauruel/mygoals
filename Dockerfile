FROM node:20-alpine

WORKDIR /app

# COPY package.json  /app

RUN npm ci --silent

COPY . .

CMD npm run dev

