FROM node:16 AS builder

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]