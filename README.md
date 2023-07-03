# Documentación de la Aplicación de Órdenes de Compra

## Introducción

Aplicación de órdenes de compra de productos utilizando Laravel 8 en el backend y ReactJS 18 (Redux) en el frontend.

## Índice
- [Introducción](#introducción)
- [Instalación del backend](#instalación-del-backend)
  - [Instalación con Docker](#instalación-con-docker)
    - [Docker requerido](#docker-requerido)
    - [Configuración de variables de entorno de la base de datos](#configuración-de-variables-de-entorno-de-la-base-de-datos)
  - [Requisitos para instalar y ejecutar Laravel 8 sin Docker](#requisitos-para-instalar-y-ejecutar-laravel-8-sin-docker)
    - [Requisitos del servidor web](#requisitos-del-servidor-web)
    - [Requisitos del sistema](#requisitos-del-sistema)
    - [Ejecución](#ejecución)
  - [Base de datos](#base-de-datos)
- [Instalación del frontend](#instalación-del-frontend)
  - [Requisitos para instalar y ejecutar el frontend](#requisitos-para-instalar-y-ejecutar-el-frontend)
  - [Ejecutar el frontend](#ejecutar-el-frontend)

## Instalación del backend

### Instalación con Docker

1. Docker requerido, instálalo a través de su página oficial [https://www.docker.com/](https://www.docker.com/)

```bash
$ docker compose up -d
```
### En otro terminal ejecuta los siguientes comandos
```
$ docker compose exec app composer install
$ docker compose exec app php artisan key:generate
$ docker compose exec app php artisan jwt:secret
$ docker compose exec app php artisan storage:link
$ docker compose exec app chmod -R 777 storage bootstrap/cache
$ docker compose exec app php artisan migrate
$ docker compose exec app php artisan db:seed
```

Esto montara un entorno de desarollo en localhost, adicionalmente genera la base de datos en el puerto 3306 de las cuales si no se tienen configuradas variables de entorno po defecto son:

	DB_DATABASE=phper
	DB_USERNAME=secret

Es necesario establecer conexión y crear la base de datos con el nombre de su preferencia (Recuerde configurar en el .env).


### Requisitos para instalar y ejecutar Laravel 8 sin Docker

1. **Requisitos del servidor web:**
  - Aplicaciones como Laragom, Xampp o Wamp.
  - Servidor web como Apache o Nginx.
  - PHP versión 8.2 o superior.
  - Extensión PHP necesaria para Laravel (por ejemplo, OpenSSL, PDO, Mbstring, Tokenizer, XML, Ctype y JSON).


2. **Requisitos del sistema:**
  - Composer: Es una herramienta de administración de dependencias de PHP. Debes tener Composer instalado en tu sistema. Puedes descargarlo e instalarlo desde [https://getcomposer.org/](https://getcomposer.org/).
  
3. **Ejecución**
	
Para ejecutar el backend, es necesario ubicarse sobre la carpeta donde se encuentra seteado el backend y ejecutar los siguientes comandos:
```bash
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ php artisan jwt:secret
$ php artisan storage:link
$ chmod -R 777 storage bootstrap/cache
$ php artisan migrate
$ php artisan db:seed
$ php artisan serve --port=80
```


- **Base de datos:**
  - MySQL, PostgreSQL, SQLite o SQL Server, según tu preferencia.
  - Asegúrate de tener las credenciales y la información de conexión necesaria para acceder a tu base de datos (Recuerde configurar en el .env).


## Instalación FrontEnd

### Requisitos para instalar y ejecutar el Frotend

1.**Node.js**: La versión LTS recomendada es Node.js 14.x

2.**NPM**: Junto con Node.js, también obtendrás NPM (Node Package Manager) automáticamente. 

3.**Ejecutar el FrontEnd**
  - Ubicate en la carpeta donde se encuentra seteado el fontend y ejecuta el comando:
   ```bash
    $ npm run start
   ``` 

