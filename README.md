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

### Sobre la API

#### Protocolo

* HTTP - Es una API REST

#### API endpoints

* `https://salty-beyond-87863.herokuapp.com/api/v1/products`

#### Tipos de petición implementados

* GET

#### Formato de respuesta

* JSON

#### Formas de USO

Se pueden realizar los filtros por los siguientes atributos:

* category
* product_type
* tag_list
* brand

#### Ejemplos de uso

Ejemplo de filtro por atributo (ejemplo realizado con brand):

* `https://salty-beyond-87863.herokuapp.com/api/v1/products?brand=maybelline`

Ejemplo de filtro por atributo (ejemplo realizado con brand):

* `https://salty-beyond-87863.herokuapp.com/api/v1/products?tag_list[]=Vegan`

Ejemplo con varios filtros:

* `https://salty-beyond-87863.herokuapp.com/api/v1/products?tag_list[]=Vegan`

Ejemplo tomando producto unico mediante el ID:

* `https://salty-beyond-87863.herokuapp.com/api/v1/products/1048`

## CONSIDERACIONES

Esta API pertenece al primer proyecto de PLATZI MASTER Cohort 7
