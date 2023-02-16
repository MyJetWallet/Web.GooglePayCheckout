FROM nginx:1.23.3-alpine
ADD src/public /usr/share/nginx/html
COPY default.conf /etc/nginx/http.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

