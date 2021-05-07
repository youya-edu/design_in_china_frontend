FROM node

WORKDIR /app/frontend

RUN yarn global add @vue/cli

COPY ./start-frontend.sh /app/scripts/start-frontend.sh

RUN chmod +x /app/scripts/*

CMD [ "/app/scripts/start-frontend.sh" ]