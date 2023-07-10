function contar (){ //Quando eu clicar no botão contar ele vai disparar este método
    var ini = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var passo = document.getElementById(`txtp`)
    var res = document.getElementById(`res`)

    if(ini.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        alert(`ERRO faltam dados!`)
    }else{
        res.innerHTML = `Contando... <br>` //Muda o nome preparando a contagem!
        var i = Number(ini.value) // convertendo em variáveis numéricas!
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c<=f; c+=p){
            res.innerHTML += `${c}`
        }
    }
}