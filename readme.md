## Español

Este repositorio contiene un Workflow creado con webpack para utilizar en un proyecto web el cual incluye:
1. Html-webpack-plugin (Puedes cargar un archivo html para tu proyecto)
2. Style-loader (Para cargar los estilos de css de tu proyecto)   
3. Sass-loader (Para poder utilizar Sass en tu proyecto)
4. File-loader (Para poder cargar imagenes en tu proyecto)


## Como cargar imagenes en tu proyecto

Para poder cargar las imagenes en tu proyecto, es necesario que sea importada a la raiz del grafo del proyecto, es  decir, ./src/main.js utilizando import './images/example.jpg' o require './images/example.jpg' dependiendo de la versión de ecmascript que estes utilizando.

## Puedes crear componentes de scss y utilizarlos a través de un import dentro del archivo "./styles/main.scss"

## Y puedes agregar muchas funcionalidades a través configurando el archivo de configuración de webpack.


# Como utilizar

$ git clone this-repository
$ cd ./path/to/the/file
$ yarn install
$ yarn start - para arrancar la build de producción
$ yarn run start:dev - para arrancar el servidor de desarrollo.

## English

This repository contain a workflow create with webpack for use in web project which contains:

1. Html-webpack-plugin (Can load an html file for your project)
2. Style-loader (Can load the styles for your project)
3. Sass-loader (For use Sass in your project)
4. File-loader (For load images in your project)

## How to load images in your project

For can load the images in your project is necesary to be imported on the  root of the project graph, that is, ./src/main.js using import './images/example.jpg' or require './images/example.jpg depends of your ecmascript version are you using.

## Can create scss components and using this importing this inside the file "./styles/main.scss"

## And can add a lot of functionality setting with the webpack config file

## How to start
$ git clone this-repository
$ cd ./path/to/the/file
$ yarn install
$ yarn start - for start the production build
$ yarn run start:dev - for start the development server.