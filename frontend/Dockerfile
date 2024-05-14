FROM --platform=linux/amd64 node:18.16.0 as node
WORKDIR /app
ENV TZ=Asia/Tokyo
COPY ./package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN /app/node_modules/.bin/ng build --configuration production
#stage 2
FROM --platform=linux/amd64 nginx:alpine
ENV TZ=Asia/Tokyo
COPY --from=node /app/dist/frontend /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
