// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:
// input: 15 , 3, 9
// Output: El 15 es el número más grande


let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 =parseInt(prompt("Ingresa el segundo número:"));
let numero3 =parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`El ${numero1} es el número más grande.`);
} else if (numero1 < numero2 && numero3 < numero2) {
    document.write(`El ${numero2} es el número más grande.`);
} else {
    (numero1 < numero3 && numero2 < numero3) 
    document.write(`El ${numero3} es el número más grande.`);
}

