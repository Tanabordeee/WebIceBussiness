FROM node:18-alpine
WORKDIR /app

ENV DB_CONN_STRING=your_database_connect
ENV DB_NAME=your_database_name
ENV CUSTOMER_COLLECTION_NAME=your_collection_name
ENV NEXT_PUBLIC_API_URL=http://localhost:3000/api/routes
ENV NEXT_PUBLIC_API_LOGIN=http://localhost:3000/api/login
ENV JOSE_SECRET=your_secret_key
ENV NEXT_PUBLIC_NAME=your_login_name
ENV NEXT_PUBLIC_PASSWORD=your_password

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

