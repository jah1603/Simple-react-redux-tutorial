FROM node:carbon
ADD . /code
WORKDIR /code
RUN npm install
EXPOSE 3000
CMD npm start
