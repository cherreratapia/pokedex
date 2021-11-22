# Declare the base image
FROM node:lts-alpine3.14
# Build step
# 1. copy package.json and yarn.lock to /app dir
RUN mkdir /app
COPY package.json /app
COPY yarn.lock /app
# 2. Change working directory to newly created app dir
WORKDIR /app
# 3 . Install dependencies
RUN yarn install --frozen-lockfile
# 4. Copy the source code to /app dir
COPY . .
# 5. Build
RUN yarn build
# 5. Expose port 5000 on the container
EXPOSE 5000
# 6. Run the app
CMD ["yarn", "serve"]