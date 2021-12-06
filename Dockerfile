FROM node:12.22-slim
RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook
RUN npm install -g --force npx 

# RUN ls -al .
RUN npm install graceful-fs --save-dev
RUN npm install
RUN npm run build-storybook
# COPY storybook-static .
CMD npx http-server storybook-static

EXPOSE 8080
