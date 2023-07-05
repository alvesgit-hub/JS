
function carregar() {

    var msg = window.document.getElementById(`msg`)

    var img = window.document.getElementById(`imagem`)

    var data = new Date()
    var hora = data.getHours()

        
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src= `fotomanha.png`
        document.body.style.background = `#A4D9DB`
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src= `fototarde.png`
        document.body.style.background = `#65644F`

    }else {
        // Boa noite!
        img.src= `fotonoite.png`
        document.body.style.background = `#20343b` //mudando o background em JS
    }

}

