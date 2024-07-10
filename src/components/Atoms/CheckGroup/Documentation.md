Um CheckGroup, pode ser entendido como um grupo de seleção de caixas de verificação. Este elemento é utilizado em interfaces de utilizador para permitir que os utilizadores escolham várias opções de uma lista. Cada opção é representada por uma caixa de verificação que pode ser marcada ou desmarcada independentemente. Os CheckGroups são úteis quando os utilizadores precisam de selecionar várias opções de uma lista de itens relacionados.
<br>
<br>

## Props
<br>

#### data
Array com informação para cada checkbox. Id, nome e disabled (indicar se vai ficar disabled ou não)

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
True or False, indica se as checkboxes irão estar na mesma linha ou em linhas separadas.

#### value
Valor selecionado.

#### onChange
Método para mudar o valor selecionado