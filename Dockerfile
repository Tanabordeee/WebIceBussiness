FROM node:18-alpine
WORKDIR /app

ENV DB_CONN_STRING=your database connect
ENV DB_NAME= your database name
ENV CUSTOMER_COLLECTION_NAME= your collection name
ENV NEXT_PUBLIC_API_URL=http://localhost:3000/api/routes
ENV NEXT_PUBLIC_API_LOGIN=http://localhost:3000/api/login
ENV JOSE_SECRET= your secret key
ENV NEXT_PUBLIC_NAME= your login name
ENV NEXT_PUBLIC_PASSWORD= your password

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

