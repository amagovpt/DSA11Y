Um RadioGroup, pode ser compreendido como um grupo de seleção de rádio. Este elemento é utilizado em interfaces de utilizador para permitir que os utilizadores escolham apenas uma opção de uma lista de seleção. Cada opção é representada por um botão de rádio que pode ser selecionado individualmente. Quando uma opção é selecionada, as outras opções no mesmo grupo são automaticamente desmarcadas.
<br>
<br>

## Props
<br>

#### data
Array com informação para cada radiocheck. Id, nome e disabled (indicar se vai ficar disabled ou não)

	[
        {
            id: "1",
            name: "item 1",
        },
        {
            id: "2",
            name: "item 2",
        },
        {
            id: "3",
            name: "item 3",
        },
        {
            id: "4",
            name: "item 4",
        },
        {
            id: "5",
            name: "item 5",
            disabled: true,
        },
    ]

#### darkTheme
"light" ou "dark", depende do modo em que a página se encontra

#### inline
True or False, indica se os radiochecks irão estar na mesma linha ou em linhas separadas.

#### value
Valor selecionado.

#### onChange
Método para mudar o valor selecionado