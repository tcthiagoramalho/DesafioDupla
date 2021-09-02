/// <reference types ="cypress"/>

import loginElements from "../elements/loginElements";

const Elements = new loginElements

class loginPage {
    
    preencherDadosDeLogin(user, passw) {
        cy.get(Elements.btnAbriModalLogin()).click();

        cy.get(Elements.username()).type(user)
        cy.get(Elements.password()).type(passw)
    }

    signIn() {
        cy.get(Elements.signIn()).click();
    }

    validaUserLogado(user) {
        cy.get(Elements.btnAbriModalLogin()).contains(user)
    }

    validarMsgDadosInvalidos() {
        cy.get(Elements.msgDadosInvalidos()).should('contain', 'Incorrect user name or password.')
    }

}

export default loginPage
