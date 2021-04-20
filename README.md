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

### Sobre uso de la API

#### Instalacion

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
#### Ejecutar en modo desarrollo

En terminal de Ubuntu 

```
npm run dev
```

#### Ejecutar en modo Producción

En terminal de Ubuntu (WSL2) caso exista un bug ver seccion de bugs:

```
npm run start 
```

### Explicación funcionamiento


### Bugs

```
 "scripts": {
    "start": "cross-env NODE_ENV=production node index.js",
```

## CONSIDERACIONES

Esta API pertenece al primer proyecto de PLATZI MASTER Cohort 7
