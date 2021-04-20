# Maybeline_Cosmetics
Este proyecto es una integración entre el Frontend y Backend mediante la implementación de una nueva API. 
El objetivo principal es presentar un portal que muestre los productos de la empresa ficticia Maybelline Cosmetics.

## LINK DOCUMENTACION EN NOTION

En el siguiente link encontraras información sobre los detalles del proyecto, en relación organizacion y requerimientos:
https://www.notion.so/Maybellin-Cometics-P1-C7-3d262f0014de4cca84093bf38d99d462


## BACKEND - Documentación de la REST API

### API VERSION

Version 1.0

### HOST ACTUAL

API se encuentra actualmente implementada en Heroku, a la que puedes acceder mediante el link:
* https://salty-beyond-87863.herokuapp.com/

### Lenguajes

* NodeJs
* Express

### Base de Datos

* MongoDB

### Plataforma de Pruebas

* Postman

## Sobre uso de la API

### Instalacion

1. Clonar repositorio:

2. En terminal de Ubuntu 

```
sudo npm install
```

3. Crear archivo `.env` y copiar información del archivo `.env.example` (Verificar archivo `.env` se encuentre listado en `.gitignore`)

```
// CONFIG
PORT=8000

// MONGO
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=

// AUTH
AUTH_ADMIN_USERNAME=
AUTH_ADMIN_PASSWORD=
AUTH_ADMIN_EMAIL=
AUTH_JWT_SECRET=
```
### Ejecutar en modo desarrollo

En terminal de Ubuntu 

```
npm run dev
```

### Ejecutar en modo Producción

En terminal de Ubuntu (WSL2) caso exista un bug ver seccion de bugs:

```
npm run start 
```

### Explicación funcionamiento

Archivo `index.js` tiene:

* Inicialización de dependencias
* Cargar los Middlewares
* Asignación de rutas
* Asignación de ruta de archivos estaticos
* Redireccionamientos de urls
* Carga de pagina 404
* Carga de middlwares para manejo de errores
* Inicializar el servidor

Adicional se encuentran las carpetas:

* config
* lib
* routes
* scripts
* services
* test
* utils
* views

#### Config

En la carpeta **config** se manejan la carga de variables de entorno, estas se encuentran en el archivo `index.js`.

#### Lib

En la carpeta **lib** se manejan en el archivo `mongo.lib`, la conexión a la base de datos:
* Importante establecer adecuadamente las variables de entorno, para formar la URI adecuadamente
* En esta seccíón se realizan las consultas a la base de datos (uso de comandos de MongoDB)

#### Routes

En la carpeta **routes** se encuentran, las carpetas **views**(es usada para la implementación de template engines, en el momento no se encuentra funcional) y
 **api**, carpeta cuenta con el controlador y la autenticación por tokens.

* En el archivo `api.js` se encuentran las peticiones realizadas a los endpoints solicitados
 
### Bugs

```
 "scripts": {
    "start": "cross-env NODE_ENV=production node index.js",
```

## CONSIDERACIONES

Esta API pertenece al primer proyecto de PLATZI MASTER Cohort 7
