// alert("Olá")
res.style.textAlign = "center"
clic.style.textAlign = "center"
tt.style.background = "#b7acac"
tt.style.font = "normal 15pt Segoe UI"
function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // FullYear pega o ano com 4 digitos
    var fano = document.getElementById("txtano")
    var res = document.querySelector("#res")
    // verificando se o ano esta vazio ou se é maior que o ano atual:
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value == 0) {
        alert("ERRO: Verifique os dados e tente novamente!")
    } else { // verifica qual o radio button foi selecionado
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value) // ano atual menos o VALOR digitado em fano. Estava dando erro de NaN porque eu tinha digitado fano.Value em vez de fano.value!!!!!
        var genero = ""
        // Criando uma imagem pelo JavaScript dinâmicamente:
        var img = document.createElement("img")
        // Criando uma tag para a img:
        img.setAttribute("id", "foto")
        res.InnerHTML = `Idade calculada: ${idade}`
        if (fsex[0].checked) {
            genero = "Homem"
            // carregando a imagem:
            if (idade >= 0 && idade < 10) {
                // Criança
                corpo.style.background = "#e4d0b8"
                // foto.img.scr = "criancahomem.png"
                img.setAttribute("src", "criancahomem.png")
            } else if (idade < 21) {
                // jovem
                corpo.style.background = "#e49f80"
                img.setAttribute("src", "jovemhomem.png")
            } else if (idade < 50) {
                // adulto
                corpo.style.background = "#7b5236"
                img.setAttribute("src", "adultohomem.png")
            } else {
                // idoso
                corpo.style.background = "#2d2021"
                img.setAttribute("src", "idosohomem.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
                corpo.style.background = "#e4d0b8"
                img.setAttribute("src", "criancamulher.png")
            } else if (idade < 21) {
                // jovem
                corpo.style.background = "#e49f80"
                img.setAttribute("src", "jovemmulher.png")
            } else if (idade < 50) {
                // adulto
                corpo.style.background = "#7b5236"
                img.setAttribute("src", "adultomulher.png")
            } else {
                // idoso
                corpo.style.background = "#2d2021"
                img.setAttribute("src", "idosomulher.png")
            }
        }
        var resposta = `Detectamos ${genero} com ${idade} anos de idade.`
        res.innerHTML = resposta
        res.appendChild(img)
    }

}