FROM node:20-alpine

WORKDIR /app

COPY . .

EXPOSE 7860
ENV PORT=7860

CMD ["node", "static-server.js"]
