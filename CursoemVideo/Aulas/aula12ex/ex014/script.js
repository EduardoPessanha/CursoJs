// alert("Olá")
// fotomanha -> "#e4dace"
// fototarde -> "#789036"
// fotonoite -> "#483a37"
function carregar() {
    var agora = new Date()
    var hora = `${agora.getHours()}`  //:${agora.getMinutes()}
    var horamin = `${agora.getHours()}:${agora.getMinutes()}`
    // var hora = 14
    // var hora = 19
    var msg = document.getElementById("msg")
    var img = document.querySelector("#imagem")

    if (hora >= 0 && hora <= 12) {
        msgm = "Bom dia! " 
        img.src = "fotomanha.png"
        document.body.style.background = "#e4dace"   //manhã
    } else if (hora > 12 && hora <= 18) {
        msgm = "Boa Tarde! "
        img.src = "fototarde.png"
        document.body.style.background = "#789036"   //tarde
    }else {
        msgm = "Boa Noite! "
        img.src = "fotonoite.png"
        document.body.style.background = "#483a37"    //noite
    }

    var mensagem = `${msgm}Agora são ${horamin} horas`
    msg.innerHTML = mensagem
}