# build environment
FROM node:12.2.0-alpine as build
#WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
#COPY package*.json ./
#RUN npm install --silent
#COPY . .
#RUN npm run build-dev
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build-dev

# production environment
FROM nginx:1.16.0-alpine
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d
#COPY --from=build ./app/dist /usr/share/nginx/html

RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /
RUN chmod +x start.sh


#
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

ENTRYPOINT ["/start.sh"]
