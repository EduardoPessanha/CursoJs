## COMENTÁRIOS NO JAVASCRIPT:

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

    > var nome = 'Gustavo'
      undefined
    > var idade = 41
      undefined
    > var nota = 5.5
      undefined
    > 'O aluno ' + nome + ' de ' + idade + ' de idade tirou nota ' + nota
      'O aluno Gustavo de 41 de idade tirou nota 5.5'
    > 
#### Template String:

Para usar a template string é obrigatório o uso da crase como delimitador!

    >
    > `O aluno ${nome} de ${idade} anos de idade tirou nota ${nota}`
      'O aluno Gustavo de 41 anos de idade tirou nota 5.5'
 

var s = 'Javascript'

**s.length** -> retorna o tamanho da string<br/>
**s.toUpperCase** -> Converte todos os caracteres alfabeticos de uma String em Maiúsculo.<br/>
**s.toLowerCase** -> Converte todos os caracteres alfabeticos de uma String em Minúsculo.

### Formatando Números:

**n.toFixed()** Retorna uma String, que representa um número com número de casas decimais definido.


    > var n1 = 1234.5
      undefined
    > n1
      1234.5
    > n1.toFixed(2)
      '1234.50'
    >
    > n1.toFixed(2).replace('.', ',')
      '1234,50'
    >  
    > n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
      'R$ 1.234,50'

## Operadores do JavaScript

    . Aritméticos
    . Atribuição
    . Relacionais
    . Lógicos
    . Ternários

### __Aritméticos:__

    +  -> soma
    -  -> subtração
    *  -> multiplicação
    /  -> divisão (retorna sempre um número Real)
    %  -> é o resto da divisão
    ** -> potência

![aritmeticos01](https://user-images.githubusercontent.com/68357896/101282318-474f8700-37b3-11eb-95f2-7f6bab98085b.png)

Obs.: __% -> é o resto da divisão inteira!!!__

__Ordem de precedência__

![precedencia](https://user-images.githubusercontent.com/68357896/101282278-f475cf80-37b2-11eb-9e25-0f5cfc99b1ae.png)


### __Atribuição__

![atribuicaosimples](https://user-images.githubusercontent.com/68357896/101282546-9c3fcd00-37b4-11eb-9b6c-7b9e4b4b8309.png)

### __Auto-atribuição__

    var n = 3  --> 3
    n = n + 4  ->  n += 4  --> 7
    n = n - 5  ->  n -= 5  --> 2
    n = n * 4  ->  n *= 4  --> 8
    n = n / 2  ->  n /= 2  --> 4
    n = n ** 2 ->  n **= 2 --> 16
    n = n % 5  ->  n %= 5  --> 1

### __Incremento__

    var x = 5
    x = x + 1 -> x += 1 -> x++ --> 6
    x = x - 1 -> x -= 1 -> x-- --> 5


### __Relacionais__

Para toda expressão que tenha um operador relacional ligado a ela, o resultado dessa expressão será sempre um valor booleano, ou seja, será um valor do tipo __*Verdadeiro*__ ou __*Falso*__.

![relacionais](https://user-images.githubusercontent.com/68357896/101285683-46bfec00-37c5-11eb-8e03-98b8f4f4b78f.png)

*Atenção:*

1. Um símbolo de __=__ no JavaScript (como em outras linguagens de programação) é um operador de atribuição (le-se como __recebe__). O operador de igualdade no JavaScript é __==__.

2. __!=__ -> quer dizer "não igual", diferente.

3. Quando temos operadores relacionais e aritméticos na mesma expresão, primeiro resolvemos os operadores aritméticos para depois resolver os operadores relacionais.

### __Identidade__

O operador de igualdade (__==__) no JavaScript não testa o tipo:

        5 == 5   ---> true
        5 == '5' ---> true

O operador de identidade, ou operador de igualdade restrita, __===__, que testa se os dois operandos são idênticos e do mesmo tipo.


    5 === '5' ---> falso (apesar dos dois operandos terem o 
                   mesmo valor, eles são de tipos diferentes).
    5 != '5'  ---> false
    5 !== '5' ---> true (desigualdade restrita)

### __Operadores Lógicos__

    !  - negação   ( não - not ) - operador unário
    && - conjunção ( e - and )   - operador binário
    || - disjunção ( ou - or )   - operador binário

![negação](https://user-images.githubusercontent.com/68357896/101287405-dfa73500-37ce-11eb-95ba-3255667d7e71.png)

![conjuncao](https://user-images.githubusercontent.com/68357896/101287331-64458380-37ce-11eb-8ca8-eb6226d3d9a0.png)


![disjuncao](https://user-images.githubusercontent.com/68357896/101287407-e33abc00-37ce-11eb-8b62-362f9d96a237.png)

*Atenção:*

1. Quando temos operadores relacionais, aritméticos e logicos na mesma expresão, primeiro resolvemos os operadores aritméticos depois os operadores relacionais, para depois resolver os operadores lógicos.
2. Quando temos em uma expressao somente operadores lógicos, a ordem de precedência é: primeiro o "não" (negação), depois o "e" (conjunção) e por fim o "ou" (disjunção).
>

    > var a = 5
    > var b = 8
    > a > b && b % 2 == 0
    > false
    > a <= b || b / 2 == 2
    > true

__Resumo de Precedência__

![precedencia01](https://user-images.githubusercontent.com/68357896/101293056-05920100-37f2-11eb-9af4-73fa1350f27e.png)

### __Ternários__

![ternario](https://user-images.githubusercontent.com/68357896/101294012-59511a00-37f3-11eb-9207-1d837fabe0bb.png)

O primeiro operando é um teste lógico, o operando do meio é o que acontece se o teste lógico for verdadeiro e o operando do final é o que acontece se o teste lógico for falso.

Podemos afirmar que o atributo __ternário__ opera de forma semelhante a condicional __"if"__

    média >= 7.0 ? "Aprovado" : "Reprovado"
    No node.js:
    > var media = 5.5
      undefined
    > media >= 7.0 ? 'Aprovado' : 'Reprovado'
      'Reprovado'
    > media += 3
      8.5
    > media >= 7.0 ? 'Aprovado' : 'Reprovado'
      'Aprovado'
    > 
    > var x = 8
      undefined
    > var res = x % 2 == 0 ? 5 : 9
      undefined
    > res
      5
    >

## __DOM__

Aprendendo a usar DOM em JavaScript

DOM = **D**ocument **O**bject **M**odel:

É um modelo de objetos para documentos, basicamente é um conjunto de objetos dentro do seu navegador que vai dar acesso aos componentes internos do website!  É a vertente WEB do JavaScript e é formado por um conjunto de objetos do Javascript para o tratamento dos componentes visuais.

### Árvore DOM

![arvore_DOM](https://user-images.githubusercontent.com/68357896/101432177-25572100-38e7-11eb-9cdc-c4bbf7149cad.png)

**window** é a raiz da árvore DOM.

Da raiz **window** derivam-se vários outros objetos, como:

	- location - mostra a localização do site: URL, 
                 página atual, páginas visitadas, etc
	- document - é o documento atual
	- history  - guarda os caminhos percorridos dentro do site
                 (de onde você veio e para onde você vai)

De cada um desses objetos derivam-se vários outros, como por exemplo:
dentro de  document nos temos o html
dentro do html nos temos o head e o body → head e body são filhos (child) de html
já o html é um parent (pai) de head e body
dentro de head temos meta, title, etc e dentro do body temos h1, p, p, div, etc

Tudo que aparece dentro da árvore DOM são chamados de **elementos**.

Nós podemos navegar dentro da árvore DOM pelos seus elementos, e para isso existem vários métodos para selecionarmos esses elementos:

Selecionando:

- Métodos de acesso:
    - por Marca (Tag) → getElementsByTagName()
    - pro ID → getElementById()
    - por Nome (Name) → getElementsByName()
    - por Classe (Class) → getElementsByClassName()
    - por Seletor (recurso mais recente) → querySelector() / querySelectorAll() -> Id => é representada por  **#** (hashtag)  e a Class é representada por **.**(ponto)


### Eventos DOM

Evento é tudo aquilo que possa acontecer com um elemento.

Mais comum - eventos de mouse:

    - mouseenter -> entra em uma área (DIV)
    - mousemove  -> mouse se movimenta em uma área (DIV)
    - mousedown  -> clica o mouse e segura
    - mouseup    -> momento em que solta o botão do mouse 
    - click      -> clica e solta rapidamente o botão do mouse
    - mouseout   -> mouse move para fora de uma área (DIV)



![eventos_DOM](https://user-images.githubusercontent.com/68357896/101557031-e71b3980-399a-11eb-892a-37e9e32b082f.png)


Eventos que podem acontecer dentro de elementos em JavaScript -> [Referência do evento](https://developer.mozilla.org/en-US/docs/Web/Events)

Para se tratar um evento, é preciso antes saber o que é uma função ou funcionalidade.

*Uma função em JavaScript é um conjunto de códigos, um conjunto de linhas, que serão executadas só quando um evento ocorrer.*

Essas linhas são denominadas de **bloco**

Um bloco em javaScript é delimitado entre os sinais de chaves, então se abre chaves, coloca o seu código e fecha chaves.
Esse bloco tem que ser nomeado como uma **"function"**.
Para que o método possa funcionar a function tem que ter um nome.


    function ação(param){

      bloco

    }

Os parâmetros da função são opcionais.

Se não nomearmos a função, ela é chamada de função anônima, e não vai ocorrer o evento.

*__Os eventos podem ser configurados na parte HTML ou diretamente no JavaScript.__*

### Condições



[moduloD-Aula11](https://www.cursoemvideo.com/course/javascript/aulas/condicoes-em-javascript/modulos/condicoes-parte-1-2/)

