<br>
<br>

## Acessibilidade
- Todas as tabelas têm que ter a respetiva `<caption>...</caption>` para descrever ao que a tabela se trata
<br>
<br>

## Props
<br>

#### data
Array com os dados para cada linha da tabela

    [
        {
            id: "1",
            title:
            "I found 1 image on the page without the alternative text equivalent.",
            component: (
            <div>
                Check if the alternative text equivalent found in the images provides
                equal information or function as the one performed by the image on the
                page. H37: Using alt attributes on img elements This WCAG 2.1
                technique is related to: Success criteria 1.1.1 (Level A) Notions
                about the SC 1.1.1
            </div>
            ),
            lvl: "AA",
            iconName: "AMA-Middle-Line",
            ele: "test",
            tdClassName: "warning-cell"
        },
    ]

#### caption
Caption para a tabela

#### col1
Nome da primeira coluna

#### col2
Nome da segunda coluna

#### col3
Nome da terceira coluna

#### lvlTitle
Texto adicional para indicar o nível, em modo mobile

#### onClick
Função para o botão "Ver detalhe", última coluna

#### imageTitlesCallback
Função que devolve o nome da imagem para cada erro

#### darkTheme
"light" ou "dark", depende do modo em que a página se encontra

#### ariaLabels
Objeto com ariaLabels para os leitores de ecrã melhor interpretarem o que está escrito naquela coluna.

    {
        button: "Ver detalhe "
        AA: "duplo ",
        AAA: "triplo "
    }