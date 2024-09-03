# AMA - Design-System 1.1.48

O Ama Design System é uma biblioteca de componentes para servir as seguintes aplicações:

- AccessMonitor
- MyMonitor
- Observatório
- AdminMonitorSuite - Backoffice do sistema

Para mais informações, visite o site, onde se encontra todos os componentes e os parâmetros que são possíveis passar.

## Instalação
```
    npm install ama-design-system
```

Para que os Icons funcionem devidamente, foi criada uma pasta "styles" se não existia ainda, e foi copiado um ficheiro css
chamado fontStyle onde contém os importes dos Icons.

É necessário importar estes estilos no App.js ou App.jsx

```
    import "./styles/fontStyle.css";
```


## Utilização
```
    import { Icon } from 'ama-design-system'

    <Icon name={"AMA-SeloDark2-Line"} />
```
