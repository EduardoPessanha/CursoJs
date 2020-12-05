## COMENTÁRIOS NO jAVASCRIPT:

No JavaScript podemos usar dois tipos de simbologia para comentários;
    
    // -> permite fazer comentários em uma única linha.

    /* .... */ -> permite comentários entre os dois simbolos, o que pode ser feito em múltiplas linha
    
_*"Quem comenta bem seus códigos, mantém ele bem documentado!"*_

## VARIÁVEIS:

![vaga](https://user-images.githubusercontent.com/68357896/101241757-bbb4f800-36d7-11eb-81b5-92b618bbbe0f.png)
![var01](https://user-images.githubusercontent.com/68357896/101241760-c1aad900-36d7-11eb-8d05-f86d985d4dbc.png)
![var02](https://user-images.githubusercontent.com/68357896/101241766-c8395080-36d7-11eb-9000-9c72e240c56a.png)

   _*No javaScript para criar uma variável usamos a palavra **'var'**, e no JavaScript atual (moderno), também podemos utilizar a palavra **'let'** para criar uma variável.*_

    O nome de cada variável chama-se IDENTIFICADOR:

        - Podem começar com letras, $ ou _
        - NÃO podem começar com NÚMEROS
        - É possível usar letras ou NÚMEROS
        - É possível usar acentos ou símbolos
        - NÃO podem conter espaços
        - NÂO podem usar palavras reservadas

### DICAS:

    - Maiúsculas e Minúsculas fazem diferença;
    - Escolher nomes coerentes para variáveis.

Variáveis servem para guardar dados.

    Tipo NUMBER - são números, que podem ser inteiros, reais
    Tipo STRING - são caracteres alfabéticos ou numéricos definidos por aspas duplas, simples ou crase.    

USANDO O NODE.JS:

    No VSC -> Ctrl + Shift + ' -> abre um novo terminal, após, digitar node e teclar Enter.
    Para sair do ambiente node, precisamos digitar '.exit'

### Tipos primitivos:

- number
    - Infinity
    - NaN -> **N**ot **a** **N**umber
- string
- boolean
- null
- undefined
- object
    - array
- function

Para verificar o tipo da variável usamos o comando **typeof**

Os tipos primitivos primordiais são:

- number
- string
- boolean


## Manipulação de Dados

### Conversão de string para number:
    - Number.parseInt(n) ou parseInt(n) -> faz a conversão para número inteiro
    - Number.parseFloat(n) ou parseFloat(n) -> faz a conversão para número Real
    - Number(n) -> faz a conversão para número inteiro/Real conforme o  valor recebido.

### Conversão de number para string:
    - n.toString() ou String(n) (forma mais atual de conversão)

### Formatando String:

var s = 'Javascript'

'Eu estou aprendendo s' (não faz interpolação)-> Eu estou aprendendo s

'Eu estou aprendendo " + s (faz concatenação)-> Eu estou aprendendo JavaScript -> forma tradiconal!

-> var nome = 'Gustavo'<br/>
undefined<br/>
-> var idade = 41<br/>
undefined<br/>
-> var nota = 5.5<br/>
undefined<br/>
-> 'O aluno ' + nome + ' de ' + idade + ' de idade tirou nota ' + nota<br/>
'O aluno Gustavo de 41 de idade tirou nota 5.5'
> 
#### Template String:

Para usar a template string é obrigatório o uso da crase como delimitador!

-><br/> 
-> `O aluno ${nome} de ${idade} anos de idade tirou nota ${nota}`<br/>
'O aluno Gustavo de 41 anos de idade tirou nota 5.5'
 

var s = 'Javascript'

**s.length** -> retorna o tamanho da string<br/>
**s.toUpperCase** -> Converte todos os caracteres alfabeticos de uma String em Maiúsculo.<br/>
**s.toLowerCase** -> Converte todos os caracteres alfabeticos de uma String em Minúsculo.

### Formatando Números:

**n.toFixed()**

-> var n1 = 1234.5<br/>
undefined<br/>
-> n1<br/>
1234.5<br/>
-> n1.toFixed(2)<br/>
'1234.50'<br/>
-><br/>
-> n1.toFixed(2).replace('.', ',')<br/>
'1234,50'<br/>
-><br/>  
-> n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})<br/>
'R$ 1.234,50'

[moduloB_aula07_parte1](https://www.cursoemvideo.com/course/javascript/aulas/comandos-basicos-do-javascript/modulos/operadores-parte1/)
