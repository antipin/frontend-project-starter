# Multi-stage build
# Stage 1: Build the React application
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:1.29.1-alpine

# Defaults (can be overridden at runtime with -e)
ENV NGINX_PORT=80 \
    NGINX_SERVER_NAME=localhost

# Adding own nginx configuration template
# (nginx will automatically process .template files at runtime)
RUN rm -f /etc/nginx/conf.d/default.conf;
COPY etc/nginx/default.conf /etc/nginx/templates/default.conf.template

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
