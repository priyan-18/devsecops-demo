FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY server.js ./

FROM gcr.io/distroless/nodejs22-debian13:nonroot

WORKDIR /app

COPY --from=builder --chown=nonroot:nonroot /app /app

EXPOSE 3000

CMD ["server.js"]