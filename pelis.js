//aca voy a poner una funcion para cada comando
//ordenar segun titulo, rating y
//filtrar por letra o tags
//itera el json

//iterar
const fs = require("fs");

var archivoOriginal = fs.readFileSync(__dirname + "/pelis.json");

var archivoString = archivoOriginal.toString();

var archivoDatos = JSON.parse(archivoString);

exports.listado = archivoDatos;

//recortando el input
exports.recibiendoDeLaTerminal = function recibiendo(enLaTerminal) {
  var posicionesAGuardar = enLaTerminal.length - 2;
  var primerRecorte = enLaTerminal.splice(2, posicionesAGuardar);
  return primerRecorte;
};
//parseando y generando el collection
exports.parsearArgumentos = function parsearArgumentos(argv) {
  const respuesta = {};
  argv.forEach(function (item, ind) {
    if (item.startsWith("--")) {
      const nombreSinGuiones = item.slice(2);
      respuesta[nombreSinGuiones] = argv[ind + 1]; //.replace("-", " ");
    }
  });

  return respuesta;
};
//function para ordenar
exports.ordenandoSegun = function ordenando(propiedad, listaDePeliculas) {
  var ordenarPorPropiedad = listaDePeliculas.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });

  return ordenarPorPropiedad;
};
//function para buscar
exports.buscarSegun = function buscar(propiedad, listadoEnArgumento) {
  var buscarPorPropiedad = listadoEnArgumento.filter(function (item) {
    var enMinuscula = item.title.toLowerCase();
    return enMinuscula.includes(propiedad.toLowerCase());
  });

  return buscarPorPropiedad;
};

//function para los tags
exports.buscarSegunTag = function buscarTag(propiedad, listaDePeliculas) {
  var buscarPorPropiedad = listaDePeliculas.filter(function (item) {
    return item.tags.includes(propiedad);
  });

  return buscarPorPropiedad;
};
//function para el no formato
exports.noFormato = function noFormato(argumento) {
  var argumentoSinFormato = JSON.stringify(argumento);
  return argumentoSinFormato;
};
