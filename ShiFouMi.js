var value1 = Number(prompt('Choisissez un nombre'));
//var value2 = Number(prompt('Choisissez un second nombre'));


/*function demi (nombre1) {
    return nombre1 / 2;
}
alert("La moitier de " +value1+ " est " +demi(value1)+ " !");


function somme (nombre1,nombre2) {
    return nombre1 + nombre2;
}
alert(" La Somme de " +value1+ " et de " +value2+ " donne " +somme(value1,value2)+ " !");


function signe (signe1) {
    if (value1 < 0) {
        return signe1 =  " est négatif !"
    }else if (value1 > 0) {
        return signe1 =  " est positif !"
    }else {
        return signe1 = "Le chiffre 0 est nul"
    }
}
alert( "Le nombre " +value1+ " , " + signe(value1));*/

var fact = 1;

function factorielle (nombre1) {
    
    for (var i = 0; i != nombre1 ; i++ ) {
         fact = fact * (i + 1);
    }
}
factorielle(value1);
alert(fact);
