let numero1 = parseInt(prompt('Ingrese un numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
console.log(numero1);
console.log(numero2);

if (numero1>numero2) {
    document.write('Elprimer numero es el más grande')
}else{
    if (numero1==numero2) {
    document.write('los numeros son iguales');
}
else{
    document.write('el segundo numero es mas grande');
}
}