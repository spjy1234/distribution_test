FROM --platform=linux/amd64 node:18
WORKDIR /app
COPY ./package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

CMD node dist/main.js