// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
// input: Hola mundo
// Output: oauo

let frase = prompt("Ingresa una frase:");
let vocales = "";
let contador = 0;

while (contador < frase.length) {
    let caracter = frase.charAt(contador);

    if (caracter === 'a' || caracter === 'A' || 
        caracter === 'e' || caracter === 'E' || 
        caracter === 'i' || caracter === 'I' || 
        caracter === 'o' || caracter === 'O' || 
        caracter === 'u' || caracter === 'U') {
            vocales += caracter;
    }

    contador++;
}

console.log(`Las vocales en la frase "${frase}" son: ${vocales}`);


