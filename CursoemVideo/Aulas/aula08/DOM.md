        Aprendendo a usar DOM em JavaScript

Conhecendo o Document Object Model - DOM

DOM – Document Object Model – é a vertente WEB do JavaScript – é formado por um conjunto de objetos do JavaSript para o tratamento dos componentes visuais.

Árvore DOM:

                    window
                   /   |   \
                  /    |    \
                 /     |     \
         location   document  history
                       |
                       |
                     html
                    /    \
                   /      \
                  /        \
               head       body  
              /  |       / /\ \
          meta title    / /  \ \
                       / /    \ \
                     h1 p     p  div
                              |
                           strong

window é a raiz da árvore DOM.

Da raiz windows derivam-se vários outros objetos, como:
	- location (mostra a localização do site: URL, página atual, páginas visitadas, etc)
	- document (é o documento atual)
	- history (guarda os caminhos percorridos dentro do site)
De cada um desses objetos derivam-se vários outros, como por exemplo:
dentro de  document nos temos o html
dentro do html nos temos o head e o body → head e body são filhos (child) de html
já o html é um parent (pai) de head e body
dentro de head temos meta, title, etc e dentro do body temos h1, p, p, div, etc

Tudo que aparece dentro da árvore DOM são chamados de elementos.  
Nós podemos navegar dentro da árvore DOM pelos seus elementos, e para isso existem vários métodos para selecionarmos esses elementos:

Selecionando:
- Métodos de acesso:
    - por Marca (Tag) → getElementsByTagName()
    - pro ID → getElementById()
    - por Nome (Name) → getElementsByName()
    - por Classe (Class) → getElementsByClassName()
    - por Seletor (recurso mais recente) → querySelector() / querySelectorAll()
	Id => é representada por  #(hastag)  e a Class é representada por  .(ponto)
