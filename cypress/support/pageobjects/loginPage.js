/// <reference types ="cypress"/>

import loginElements from "../elements/loginElements";

const Elements = new loginElements

class loginPage {
    
    preencherDadosDeLogin() {
        cy.get(Elements.btnAbriModalLogin()).click();

        cy.get(Elements.username()).type("thiagoT")
        cy.get(Elements.password()).type("Tc12345")
    }

    signIn() {
        cy.get(Elements.signIn()).click();
    }

    ValidaUserLogado() {
        cy.get(Elements.btnAbriModalLogin()).contains('thiagoT')
    }

}

export default loginPage