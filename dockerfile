#env GOOS=linux GOARCH=amd64 go build
#docker build -t mercurius:mercadodescentralizadohtml5 .
#docker run -p 8080:8080 -d mercurius:mercadodescentralizadohtml5

FROM scratch

ADD mercadodescentralizadohtml5 /
ADD conf/ /conf
ADD public/ /public
ADD locale/ /locale

CMD [ "/mercadodescentralizadohtml5" ]