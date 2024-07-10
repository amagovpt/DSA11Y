Um breadcrumb, é um elemento de navegação utilizado em websites para mostrar a hierarquia da página atual em relação ao site como um todo. Geralmente, é uma linha de texto ou conjunto de links exibidos horizontalmente na parte superior de uma página da web, logo abaixo da barra de navegação principal. Cada item do breadcrumb representa uma página ou categoria na hierarquia do site, com a página atual geralmente sendo destacada ou exibida de forma diferente dos outros itens.

## Props
<br>

#### data
Array com cada iteração de breadcrumb, este array pode ser composto por um Título, uma referência (href) e ainda pode ter uma função que vai ser executada quando o breadcrumb é clicado (onClick).

	[
        {
            title: "Acessibilidade.gov.pt",
            href: "#",
        },
        {
            title: "Observatório",
            href: "#",
        },
        {
            title: "Diretórios",
            href: "",
            onClick: () => navigate("/")
        },
    ]

#### darkTheme
"light" ou "dark", depende do modo em que a página se encontra

#### tagHere
Passado um texto para indicar onde o utilizador se encontra. Especialmente usado por ferramentas de apoio. Exemplo: "você está aqui"