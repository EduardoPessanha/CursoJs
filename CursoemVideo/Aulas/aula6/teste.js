var nome = window.prompt('Qual é o seu nome? ')
document.write('Seu nome tem ' + nome.length + ' letras')
document.writeln(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras!`); // <br/>  => mudança de linha Break Row
document.writeln(`Seu nome em letras maiúscula é ${nome.toUpperCase()}`)
document.writeln(`Seu nome em letras minusculas é ${nome.toLowerCase()}`)
