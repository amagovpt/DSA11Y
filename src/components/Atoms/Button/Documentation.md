Um botão é um elemento de interface com o utilizador que, quando clicado, desencadeia uma ação específica num website ou aplicação. Geralmente, os botões são utilizados para indicar ao utilizador que uma determinada ação pode ser realizada, como submeter um formulário, abrir uma página, confirmar uma escolha, entre outras funcionalidades.
<br>
<br>
## Acessibilidade
- Botões que não tenham um texto visível, necessitam do atributo `label="..."` que é apresentada no Hover ou Focus
- Botões que tenham uma string (`<span>`) em uma língua diferente da atual presente no site, é necessário o atributo `lang="..."`
- Botões que sejam usados para abrir dropdowns necessitam de um atributo a indicar que podem ser usados para abrir e fechar algo. Isto pode ser feito adicionando ao botão `aria-expanded="..."`
- Um Botão fora de contexto tem que ser explicito ao que se refere, caso seja associado a algo terá que ter o atributo `aria-describedby="..."` com o respetivo id
<br>
<br>
<br>
<br>
