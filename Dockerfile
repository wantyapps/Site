FROM node:14-buster-slim

EXPOSE 80
WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install --no-dev

COPY ./ ./

EXPOSE 80
CMD ["npm", "start"]

