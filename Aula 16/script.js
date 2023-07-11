let num = document.getElementById(`input#fnum`)
let list = document.getElementById(`select#lista`)
let res = document.getElementById(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n)>=1 ** Number(n)<=100){
        return true

    }else{
        return false 
    }

}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false 
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){

    }else{
        alert(`Valor inválido ou já encontrado na lista.`)
    }

}