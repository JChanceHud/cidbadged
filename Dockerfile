FROM alpine:latest
MAINTAINER Chance Hudson

RUN apk add --no-cache nodejs-npm \
  && mkdir /src

WORKDIR /src

COPY . .

RUN npm install && npm run build

FROM alpine:latest

RUN apk add --no-cache nodejs

COPY --from=0 /src /src

CMD ["node", "/src"]
