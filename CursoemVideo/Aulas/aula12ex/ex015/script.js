// alert("Olá")
res.style.textAlign = "center"
clic.style.textAlign = "center"
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()  // FullYear pega o ano com 4 digitos
    var fano = document.getElementById("txtano")
    var res = document.querySelector("#res")
    // res.innerHTML=typeof(fano)
    // verificando se o ano esta vazio ou se é maior que o ano atual:
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("ERRO: Verifique os dados e tente novamente!")
    } else {         // verifica qual o radio button foi selecionado
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)   // ano atual menos o VALOR digitado em fano
        res.InnerHTML = `Idade calculada: ${idade}`
        if (fsex[0].checked) {
            genero = "Homem"
        }else {
            genero = "Mulher"
        }
        var resposta = `Detectamos ${genero} com ${idade} anos de idade.`
        res.innerHTML = resposta
    }

}
// document.querySelector("input").style.textAlign = "center"
 