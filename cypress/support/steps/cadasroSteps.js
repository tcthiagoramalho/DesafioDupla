/* global Given, When, Then*/

import cadastroPage from "../pageobjects/cadastroPage";

const Cadastro = new cadastroPage

And(/^acesso a tela de cadastro$/, () => { 
    Cadastro.clicarMenuUsuario(); 
    Cadastro.clicarCreateNewAccount();
})

When(/^informo os dados corretos$/, () => { 
    Cadastro.inserirUserName(); 
    Cadastro.inserirEmail(); 
    Cadastro.inserirPassword();
    Cadastro.inserirFirstName();
    Cadastro.inserirLastName();
    Cadastro.inserirPhone(); 
    Cadastro.selecionarCountry(); 
    Cadastro.inserirCity();
    Cadastro.inserirAddress();
    Cadastro.inserirState();
    Cadastro.inserirPostalCode(); 
    Cadastro.clicarBotãoDeCondição();
    Cadastro.clicarBotãoRegister();
})

Then(/^valido se o cadastro é realizado com sucesso$/, () => { 
    Cadastro.validarUser();
})