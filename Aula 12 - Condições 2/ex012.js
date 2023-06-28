var hora= 19
console.log(`Agora dão exatamente ${hora} horas!`)

if(hora >= 1 && hora <= 4){
    console.log("Boa Madrugada!")
}else if(hora >= 5 && hora <= 12){
    console.log("Bom dia!")
}else if(hora >=13 && hora <=18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}