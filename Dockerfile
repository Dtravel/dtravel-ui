FROM node:12.22-slim
RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook
RUN npm install -g --force npx 

# RUN ls -al .
RUN npm i --save-dev html-webpack-plugin@next
RUN npm install
RUN npm run build-storybook
# COPY storybook-static .
CMD npx http-server storybook-static

EXPOSE 8080
