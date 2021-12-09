FROM node:12.22.7-stretch
RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook
RUN yarn global add npx
RUN yarn add http-server --save

# RUN ls -al .
RUN yarn install
RUN yarn run build-storybook
# COPY storybook-static .
CMD npx http-server storybook-static -p 8080

EXPOSE 8080
