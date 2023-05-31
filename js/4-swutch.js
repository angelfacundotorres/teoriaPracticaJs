// let estacion = prompt('Ingresa tu estacion del año preferida: 1-verano, 2-otoño, 3-invierno, 1-primavera');

// if (estacion == '1') {
//     document.write('Sandia');
// } else if(estacion == '2'){
//     document.write('churros');
// }else if (estacion == '3') {
//         document.write('guiso');
//     }
// else{
//     document.write('cerveza');
// }

// CUANDO TENGO MUCHOS IFS ANIDADOS ES PREFERIBLE INCLINARSE PARA UNA ESTRUCTURA SWITCH

/*
switch(opcion){
    case '1':
        todas las lineas de codigo que quiero q realice cuando selecciona el 1
        break; //corta el codigo cuando ya se cumpla lo requerido
    case '2':
        todas las lineas de codigo que quiero q realice cuando selecciona el 1
        break;
    default:
        todas las lineas de codigo q quiero ejecutar cuando no es ninguna de las opciones q doy
}
*/

let estacion = prompt('Ingresa tu estacion del año preferida: 1-verano, 2-otoño, 3-invierno, 1-primavera');

switch (estacion) {
    case '1': 
    case 'verano': //puedo poner otras maneras de q entre en el case 
    case 'Verano': //ej
        document.write('sandia');
        break;
    case '2':
        document.write('churros');
        break;
    case '3':
        document.write('guiso');
        break;
    case '4':
        document.write('cerveza');
        break;
    default:
        alert('Opcion erronea');
        break;
}
