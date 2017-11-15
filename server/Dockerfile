FROM keymetrics/pm2:8

# Create app directory
WORKDIR /usr/src/app

# Bundle APP files
# COPY . .
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

COPY . .

# Show current folder structure in logs
RUN ls -al -R

EXPOSE 3000
CMD [ "pm2-docker", "start", "pm2.json" ]