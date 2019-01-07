//console.log('Hola garlopaz JS')

// Definiciones de variables

// var nombre // Fórma básica.

// nombre = 'Levistraussen'; // Asignando valor. En JS los strings van entre "" o ''; por convención el más usado es ''.
// El ; no es necesario de agregar, es opcional. Sin embargo hay casos especiales en los que si es necesario. 

// var   nombre = 'Levistraussen' // Todo en una sola linea
// var apellido = 'Méndez'

var nombre = 'Levistraussen', apellido = 'Méndez' // Absolutamentye todo en una sola linea.
console.log('Hola ' + nombre + ' ' + apellido) // Con + se concatenan strings

// JS es debilmente tipable, por lo que nada define que tipo de variable se está declarando.
var edad = 28
edad = '28 años' // Nada impide que esto sea posible.
console.log('Tengo ' + edad  + ' años') 

var peso = 75