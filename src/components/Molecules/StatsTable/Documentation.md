<br>
<br>

## Props
<br>

#### data
Array com os dados para cada linha da tabela

    {
        data:{
            infoak: {
                A: {
                    ok: 12,
                    err: 6,
                    war: 1
                },
                AA: {
                    ok: 5,
                    err: 1,
                    war: 0
                },
                AAA: {
                    ok: 0,
                    err: 0,
                    war: 2
                },
            },
            metadata: {
                count_results: 27,
            }
        }
    }

#### ok
Nome para os ok, geralmente é "Aceitáveis"

#### warning
Nome para os warning, geralmente é "Para ver manualmente"

#### error
Nome para os erros, geralmente é "Não aceitáveis"

#### darkTheme
"light" ou "dark", depende do modo em que a página se encontra

#### title
Título antes da tabela

#### caption
Caption para a tabela

#### type
Texto para o header da coluna dos tipos de erros