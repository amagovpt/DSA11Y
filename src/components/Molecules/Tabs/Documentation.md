<br>
<br>

## Props
<br>

#### tabs
Array com os dados para cada tab

    [
        {
            eventKey: "tab1",
            title: "Insert URL",
            component: <div>tab 1</div>,
        },
        {
            eventKey: "tab2",
            title: "Insert HTML code",
            component: <div>tab 2</div>,
        },
        {
            eventKey: "tab3",
            title: "Upload HTML file",
            component: <div>tab 3</div>,
            // disabled: true,
        },
    ]

#### defaultActiveKey
EventKey da tab a ser ativada inicialmente.

#### vertical
True ou False, indica se as tabs serão horizontais ou verticais.