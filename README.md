# Desafio em Dupla 

- Status: Em review

## Desafio de automação Web em dupla 

### Descrição do projeto 
- Esse desafio tem o objetivo de entrosar o time, e trazer uma visão da realidade do automatizador, a ideia é que o desafio seja realizado em dupla ou em trio fazendo uso do GitHub (em manter commits atualizados, subir o código, abrir pull request, para o colega revisar, fazer o gerenciamento das branchs, e merges) e utilizar toda a arquitetura utilizada no desafio anterior, a intenção é ter mais de 3 cenários para ser automatizados, onde cada um pegue um cenário, os cenário serão correlacionados, para aumentar a interação da dupla, e fazer com que a dupla se comunique para manter o padrão e não crie códigos duplicados, e criar mais familiaridade com a arquitetura em cypress proposta e com a linguagem.

### Ferramentas utilizadas

- VScode 
- Cypress
- JavaScript
- Mochawesome
- Cucumber

## Configuração do projeto
**Instalação:**

Cypress e dependencia do cucumber

-   `npm install --save-dev cypress cypress-cucumber-preprocessor`

Cypress

-   `npx cypress open`

Relatório mochawesome

-   `npm install --save-dev mochawesome`


## Arquitetura do Projeto:

### Massa: 

- Fixtures: Dentro da desta pasta contem arquivos `.Json` que são os arquivos de massas

### Support:

-   Elements: - Dentro da pasta Elements contém os arquivos que contém todos os elementos mapeados
    
-   PageObjects: - Dentro da pasta PageObjects contém os arquivos
    
-   Step: - Dentro da pasta Steps contém os arquivos que contém todos os steps do Projeto
    

### Integration

-   Nesta pasta contém todos os arquivo com a escrita em BDD com Gherkin 

## Executando o projeto:

Executa o projeto no navegador Google Chrome:

-   `npm run test:chrome`

Executa o projeto no navegador Google firefox:

-   `npm run test:firefox`

Executa o projeto em modo modo headless:

-   `npm run test`

## Cenários Automatizados

-   **Cenário de Cadastro:**  Preenche todos os campos e realiza o Cadastro
    
-   **Cenário de login:** Com dois casos de teste login valido e invalido 

-   **Cenário de alteração de senha:** Alterar a senha de acessos de um user e validar o login com a senha antiga e com a nova senha 

-   **Cenário de carrinho:** Adicionar produtos da loja no carrinho 

-   **Cenário de compra:** Efetivar a comprar dos produtos que estão no carrinho 

-   **Cenário de chatBot:** Interagir com o chatBot do site 


## Autores

- Laercio Andrade @https://github.com/LaercioAndradeTC
- Thiago Ramalho @https://github.com/tcthiagoramalho
