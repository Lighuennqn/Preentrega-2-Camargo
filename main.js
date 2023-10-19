const discografiaIronMaiden = [
{id: 1, Nombre: "Iron Maiden", año: 1980, precio: 8500},
{id: 2, Nombre: "Killers", año: 1981, precio: 3500},
{id: 3, Nombre: "Number Of The Beast", año: 1982, precio: 5000},
{id: 4, Nombre: "Piece Of Mind", año: 1983, precio: 1700},
{id: 5, Nombre: "Powerslave", año: 1984, precio: 2800},
{id: 6, Nombre: "Live After Death", año: 1984, precio: 2500},
{id: 7, Nombre: "Somewhere In Time", año: 1986, precio: 2900},
{id: 8, Nombre: "Seventh Son Of A Seventh Son", año: 1988, precio: 3200},
{id: 9, Nombre: "No Prayer For The Dying", año: 1990, precio: 3500},
{id: 10, Nombre: "Fear Of The Dark", año: 1992, precio: 7900},
{id: 11, Nombre: "A Real Live/Dead One", año: 1993, precio: 2800},
{id: 12, Nombre: "X Factor", año: 1995, precio: 3000},
{id: 13, Nombre: "Best Of The Beast", año: 1996, precio: 3200},
{id: 14, Nombre: "Virtual XI", año: 1998, precio: 6500},
{id: 15, Nombre: "Ed Hunter", año: 1999, precio: 4500},
{id: 16, Nombre: "Brave New World", año: 2000, precio: 4500},
{id: 17, Nombre: "Edward The Great", año: 2002, precio: 300},
{id: 18, Nombre: "Dance Of Death", año: 2003, precio: 800},
{id: 19, Nombre: "Death On The Road", año: 2005, precio: 1500},
{id: 20, Nombre: "A Matter Of Live & Death", año: 2006, precio: 3600},
{id: 21, Nombre: "Somewhere Back In Time", año: 2008, precio: 3700},
{id: 22, Nombre: "Flight 666", año: 2009, precio: 4900},
{id: 23, Nombre: "The Final Frontier", año: 2010, precio: 4200},
{id: 24, Nombre: "From Fear To Eternity", año: 2011, precio: 1500},
{id: 25, Nombre: "A Matter Of Live & Death", año: 2011, precio: 7700},
{id: 26, Nombre: "Maiden England '88", año: 2013, precio: 4500},
{id: 27, Nombre: "The Book Of Souls", año: 2015, precio: 6000},
{id: 28, Nombre: "Senjutsu", año: 2021, precio: 2500},
]

function filtrarAlbumes(lista, valor1, valor2, valor3, valor4, letras){
    return lista.filter((disco) => 
        disco.año >= valor1 &&
        disco.año <= valor2 &&
        disco.precio >= valor3 &&
        disco.precio <= valor4 &&
        disco.Nombre.includes(letras));
}

function calcularPrecioTotal(albumes){
    return albumes.reduce((total, disco) => total + disco.precio, 0);
}

function mostrarResultados(albumes) {
    if (albumes.length > 0) {
        let mensajesResultados = "Resultados:";
        albumes.forEach((disco) => {
            mensajesResultados += `\nNombre: ${disco.Nombre}, Año: ${disco.año}, Precio: $${disco.precio}`; 
        });
    mensajesResultados += `\nPrecio Total: ${precioFinal}`;
        alert(mensajesResultados);
    }
    else{
        alert("No se encontraron resultados que coincidan con los criterios de búsqueda");
    }
}


alert ("SUPER TIENDA DE DISCOS DE IRON MAIDEN");


let periodoUno = Number(prompt("Ingrese desde que año quiere consultar sobre el lanzamiento de un disco"));
let periodoDos = Number(prompt("Ingrese hasta que año quiere consultar sobre el lanzamiento de un disco"));
let costoUno = Number(prompt("Ingrese el precio mínimo para la adquisición de un disco"));
let costoDos = Number(prompt("Ingrese el precio máximo para la adquisición de un disco"));
let letras  = prompt("Ingrese una palabra o letra que referencie al disco deseado");

const resultados = filtrarAlbumes(discografiaIronMaiden, periodoUno, periodoDos, costoUno, costoDos, letras);
const precioFinal = calcularPrecioTotal(resultados);
mostrarResultados(resultados, precioFinal);





