//aca va a recibir el input, lo va a procesar y
//va a ejecutar las funciones que esten en pelis
var pelis = require("./pelis");

//Intenté hacer una function con mapa combinada a otra function con un for
//pero se me complico en la parte de concatenar las busquedas.

//function para saber que ejecutar
/*function ejecutarComandos(argumento, argumento1) {
  var key = argumento; // Object.keys(argumento);
  var valores = argumento1; //Object.values(argumento);
  console.log("soy la prueba en ejecutarComandos", key, valores); //mock
  const mapa = {
    sort: pelis.ordenandoSegun,
    search: pelis.buscarSegun,
    tag: pelis.buscarSegunTag,
    "no-format": pelis.noFormato,
  };
  const ejecutor = mapa[key];
  return ejecutor(valores); 
}
//function para ir ejecutando una a una
function ejeCentralDeFunciones(argumentos) {
  var respuestaFinal = [];
  var length = Object.keys(argumentos).length;
  console.log("soy la prueba de la cantidad de keys", length); //mock
  for (var indice = 0; indice < length; indice++) {
    respuestaFinal = ejecutarComandos(
      Object.keys(argumentos)[indice],
      Object.values(argumentos)[indice]
    );
  }
  return respuestaFinal;
}*/

//de forma "manual"(no me esta gustando usar tantos if)
function organizadorDeFunciones(argumentos) {
  var listado = pelis.listado;

  if (argumentos.sort) {
    var listado = pelis.ordenandoSegun(argumentos.sort, listado);
  } else {
    console.log("no se encuentra el argumento de sort");
  }

  if (argumentos.search) {
    var listado = pelis.buscarSegun(argumentos.search, listado);
  } else {
    console.log("no se encuentra el argumento de search");
  }
  if (argumentos.tag) {
    var listado = pelis.buscarSegunTag(argumentos.tag, listado);
  } else {
    console.log("no se encuentra el argumento de tag");
  }
  if (argumentos.hasOwnProperty("no-format")) {
    listado = pelis.noFormato(listado);
  }
  console.table(listado);

  return listado;
}

function main() {
  var input = process.argv;

  var viejoArray = pelis.recibiendoDeLaTerminal(input);
  var argumentos = pelis.parsearArgumentos(viejoArray);

  organizadorDeFunciones(argumentos);
}

main();
