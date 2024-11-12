# Usamos una imagen base de nginx para servir los archivos estáticos
FROM nginx:alpine

# Copiamos los archivos del proyecto a la carpeta de nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 para que el contenedor sea accesible
EXPOSE 80

# No es necesario un comando extra ya que nginx es el proceso principal en la imagen base
CMD ["nginx", "-g", "daemon off;"]
