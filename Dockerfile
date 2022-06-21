FROM node:16.15.1

ENV ASSEMBLY_MODE dev

WORKDIR /home/node/app

COPY . .

RUN yarn global add browser-sync\
    && yarn global add gulp-cli \
    && yarn install \
    && chown -R node:node /home/node/app

USER node:node

CMD yarn $ASSEMBLY_MODE

EXPOSE 3000 3001
