/// <reference types ="cypress"/>

import loginElements from "../elements/loginElements";

const Elements = new loginElements

class loginPage {
    
    preencherDadosDeLogin() {
        const nameUser = 'thiagoT'

        cy.get(Elements.btnAbriModalLogin()).click();

        cy.get(Elements.username()).type(nameUser)
        cy.get(Elements.password()).type("Tc12345")
    }

    signIn() {
        cy.get(Elements.signIn()).click();
    }

    ValidaUserLogado() {
        cy.get(Elements.btnAbriModalLogin()).contains(nameUser)
    }

}

export default loginPage