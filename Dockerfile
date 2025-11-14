FROM ubuntu:22.04

RUN apt update && apt install -y curl git && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "index.js"]
