FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm@10
RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY ./src/assets/images /usr/share/nginx/html/src/assets/images

EXPOSE 5174

CMD ["nginx", "-g", "daemon off;"]
