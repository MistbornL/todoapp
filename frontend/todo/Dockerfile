FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app



COPY ./package.json ./
#COPY req.txt .
RUN npm install
#RUN npm install -r req.txt
COPY . .
RUN npm run build

# add app
COPY .. ./

# start app
CMD ["npm", "start"]