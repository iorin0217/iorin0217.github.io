FROM node:10.17.0-alpine

RUN	apk update &&\
	apk add vips-dev fftw-dev --update-cache --repository  https://alpine.global.ssl.fastly.net/alpine/edge/community --repository https://alpine.global.ssl.fastly.net/alpine/edge/main &&\
	apk --no-cache add bash git gcc g++ make python curl openssl tar gtk-doc gobject-introspection expat-dev glib-dev libpng-dev libjpeg-turbo-dev giflib-dev librsvg-dev libc6-compat libgsf musl

RUN npm install --global gatsby-cli &&\
    git clone https://github.com/justsml/dans-blog.git &&\
    rm dans-blog/package.json &&\
    rm dans-blog/package-lock.json

COPY package.json dans-blog/

RUN cd dans-blog &&\
    npm install

EXPOSE 8080
WORKDIR dans-blog
CMD ["gatsby", "develop", "-H", "0.0.0.0", "-p", "8080" ]
