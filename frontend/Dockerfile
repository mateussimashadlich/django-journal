FROM node:18.12.1
EXPOSE 3000

WORKDIR /frontend

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn run build
RUN yarn add typescript --dev
RUN yarn add axios
RUN yarn add @mui/material @emotion/react @emotion/styled
RUN yarn add @fontsource/roboto
CMD ["yarn", "start"]



