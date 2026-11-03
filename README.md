# Gestor de Estudiantes

## Descripción

Integrantes:
- Joan Esteban Buitrago
- Rey Sebastian Diaz

El Gestor de Estudiantes es una aplicación web desarrollada con Vue.js 3 que permite registrar estudiantes y administrar sus calificaciones.

El sistema permite agregar estudiantes, validar sus datos, evitar duplicados en una misma carrera y controlar un cupo máximo de 10 estudiantes.

También permite subir y bajar las calificaciones, eliminar registros, filtrar por carrera, buscar por nombre y consultar los estudiantes aprobados y reprobados.

La aplicación muestra un resumen con el total de estudiantes, el promedio, la cantidad de aprobados y reprobados, y el estudiante con la mejor calificación.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vue.js 3
- Options API

## Estructura del proyecto

- `index.html`: contiene la estructura y las directivas de Vue.
- `app.js`: contiene los datos y los métodos de la aplicación.
- `styles.css`: contiene los estilos visuales.

## Ejecución

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir `index.html` en el navegador o utilizar la extensión Live Server.

Se requiere conexión a Internet para cargar Vue.js desde el CDN.

## Almacenamiento

Los estudiantes se almacenan en memoria mediante Vue.js. No se utiliza una API, una base de datos ni localStorage.

Al recargar la página, la lista vuelve a quedar vacía.

