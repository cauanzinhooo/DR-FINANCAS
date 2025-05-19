FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN rm -rf test

RUN npx tsc

EXPOSE 3000

CMD ["node", "dist/app.js"]



