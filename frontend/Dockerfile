# frontend/Dockerfile
# 1. Builder
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Serveur statique
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# (optionnel) custom nginx.conf si besoin de rewrites
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
