// crear arreglo

let series = ['Juego del calamar', 'Locky', 'Frozen', 2, true, [2, 3, 4]];

// crear arreglo vacio

let temporadas = [];

// mostrar un valor de un arreglo

document.write(series[0]);

// mostrar todos los elementos de un arreglo con un for

for (let posicion = 0; posicion < series.length; posicion++) {
    document.write('<br>'+ series[posicion]);
    
}

//agregar un elemento al final del arreglo

series.push('Breaking bad');



// agregar elementeo en una posicion en particular .splice(posicionDelElementoAAgregar, CantidadDeElementosBorrar, ElementoAgregado)

series.splice(1,0, 'Got');



//eliminar el elemento de una posicion determinada de un arreglo

series.splice(5,1);//(5 es el indice o posicion del elemento que quiero borrar, 1 cantidad de elementos que quiero borrar apartir del indice seleccionado)



// modificar el valor de un elemento especifico en un arreglo

series[4] = 'Friends';

document.write ('<br> <br> <b> Agregamos elemento en posicion 1</b> <br>');

for (let posicion = 0; posicion < series.length; posicion++) {
    document.write('<br>'+ series[posicion]);
    
}