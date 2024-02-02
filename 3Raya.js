function plan() {
    alert("Empezamoss")
    alert("Juego con JS")
}

let nombre = "Roberts"
let victoria = false

function saludo(nombre) {
    alert(`Hola ${nombre}`)
}

//saludo(miNombre)

function mostrarNombre(nombre) {
    alert(nombre.innertext)
}

let jugadorActual = "0"

function position(celda) {
    if (celda.innerHTML != "" || victoria) return
    celda.innerHTML = jugadorActual

    jugadorActual == "0" ? jugadorActual = "X" : jugadorActual = "0"
    //CONDICION ? EXPRS 1 : EXPRES 2
    //if(jugadorActual == "0"){
    //    jugadorActual = "X"       ES LO MISMO QUE ARRIBA
    //} else {
    //    jugadorActual = "0"
    //}
    comprobarTablero()
}

function comprobarTablero() {
    for (let i = 0; i <= 2; i++) { // Filas
        //Comprobar primera fila
        comprobarGanador(document.getElementById("0_" + i).innerHTML, 
        document.getElementById("1_" + i).innerHTML,
        document.getElementById("2_" + i).innerHTML)

        comprobarGanador(document.getElementById(i + "_0").innerHTML, 
        document.getElementById(i + "_1").innerHTML,
        document.getElementById(i + "_2").innerHTML)

        
    }
    
    comprobarGanador(document.getElementById("0_0").innerHTML, 
    document.getElementById("1_1").innerHTML,
    document.getElementById("2_2").innerHTML)

    comprobarGanador(document.getElementById("0_2").innerHTML, 
    document.getElementById("1_1").innerHTML,
    document.getElementById("0_2").innerHTML)
    
}

function comprobarGanador(uno, dos, tres){
    if(uno != "" && uno == dos && uno == tres){
    alert("GANASTE!!")
    victoria = true
    }
}


