var nombre = 'Levis', apellido = 'Méndez' // Absolutamentye todo en una sola linea.

var  nombreEnMayusaculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var     primeraLetraDelNombre = nombre.charAt(0) // La primera posición de un String siempre es 0. 
var cantidadDeLetrasDelNombre = nombre.length // length es un atributo

//var nombreCompleto = nombre + ' ' + apellido

// Otra forma de concatenar Strings: Interpolación de texto.
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // Dentro de las llaves {} se puede escribir código JS.

// Substrings
// var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1, 2)

// Reto
var ultimaLetraDeNombre = nombre.charAt(nombre.length - 1)
