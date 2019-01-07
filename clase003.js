var edad = 33
// edad = edad + 1
edad += 1 // Incremento forma corta

var peso = 75
// peso = peso - 2
peso -= 2

var sandwich = 1 // Un sandwich sube 1 Kg
// peso = peso + sandwich
peso += sandwich

var jugarAlFucho = 3 // Bajamos 3 Kg, oh que chido
// peso = peso - jugarAlFucho
peso -= jugarAlFucho

// Operaciones con decimales
var precioDeVino = 200.3
// var total = precioDeVino * 3 // Nos llevamos 3 vinos

// JS almacena decimales csin presición.
// var total = precioDeVino * 100 * 3  / 100 // Darle presición, para un decimal.

// Sin embargo cvuanddo no sabemos cuandtos decimales hay
var    total = Math.round(precioDeVino * 100 * 3)  / 100 
var totalStr = total.toFixed(2) // Dar dos decimales de3spués del punto
var   total2 = parseFloat(totalStr) //. Pasar a número un String.

// División
var    pizza = 8 // 8 porciones
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas