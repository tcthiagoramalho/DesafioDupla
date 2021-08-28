/* global Given, When, Then*/

import acessarSite from "../pageobjects/acessarSite";
import cadastroPage from "../pageobjects/cadastroPage";
const AcessarSite = new acessarSite
const Cadastro = new cadastroPage

Given("que acesso o site do shopping", () => { 
    AcessarSite.AbrirUrl();
})


And("acesso a tela de cadastro", () => { 
    Cadastro.clicarMenuUsuario(); 
    Cadastro.clicarCreateNewAccount();
})

When("informo os dados corretos", () => { 
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
})

Then("valido se o cadastro é realizado com sucesso", () => { 
    Cadastro.clicarBotãoRegister();
})