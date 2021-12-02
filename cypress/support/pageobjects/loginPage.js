/// <reference types ="cypress"/>

import loginElements from "../elements/loginElements";

const element = new loginElements

class loginPage {
    
    preencherDadosDeLogin(user, passw) {
        cy.get(element.btnAbriModalLogin()).click();

        cy.get(element.username()).type(user)
        cy.get(element.password()).type(passw)
    }

    preencherDadosDeLoginAposSingout(user, passw) {
        cy.get(element.btnAbriModalLogin()).click();

        cy.get(element.userName2()).type(user)
        cy.get(element.password2()).type(passw)
    }

    novaTentativaDeSenha(passw) {
        cy.get(element.password2()).clear()
        cy.get(element.password2()).type(passw)
    }

    signIn() {
        cy.get(element.signIn()).click();
    }

    signOut() {
        cy.get(element.btnAbriModalLogin()).click()
        cy.get(element.signOut()).click()
        cy.wait(500)
    }

    validaUserLogado(user) {
        cy.get(element.btnAbriModalLogin()).contains(user)
    }

    validarMsgDadosInvalidos() {
        cy.get(element.msgDadosInvalidos()).should('contain', 'Incorrect user name or password.')
    }
}

export default loginPage
