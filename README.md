Basic project to test nodejs express server and nginx proxy running in separate docker container.

1- go to subfolder nginx
2- Run cmd line "docker build -t jp/nginx-proxy" to run build nginx image
3- go to subfolder server
4- Run cmd "docker build -t jp/node-server" to run build nginx image
5- Run nodejs server with :  docker run -p 8081:3000 -d jp/node-server
6- Run nginx container with :  docker run -p 8080:80 -d jp/nginx-proxy
7- Go to http://127.0.0.1:8080/api to check that the express rest root is running fine