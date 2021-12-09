FROM node:12.22.7-stretch
RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook
RUN npm install -g --force npx 
RUN npm install http-server --save

# RUN ls -al .
RUN npm install
RUN npm run build-storybook
# COPY storybook-static .
CMD npx http-server storybook-static

EXPOSE 8080
