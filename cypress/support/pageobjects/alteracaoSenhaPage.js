/// <reference types ="cypress"/>

import alteraSenhaElements from "../elements/alteracaoSenhaElements"
const users = require("../../fixtures/users.json")
const elements = new alteraSenhaElements
const novaSenha = users.alteraSenha.novaSenha
const senhaAnterior = users.alteraSenha.senhaAtual

class alteraSenha {

    acessoConfig() {
        cy.get(elements.btnAbriDrop()).click({force: true})
        cy.get(elements.btnConfig()).click()
        cy.get(elements.btnEditDado()).click()
        cy.get(elements.btnNovaSenha()).click()
    }

    async alterarSenha() {
        await cy.get(elements.senhaAtual()).type(senhaAnterior)
        await cy.get(elements.novaSenha()).type(novaSenha)
        await cy.get(elements.confirmeSenha()).type(novaSenha)
    }

    async salvarAlteracao() {
        cy.scrollTo(0, 3000)
        cy.wait(2000)
        await cy.get(elements.btnSalvar()).click()
    }

    async validarQueAlteraçãoFoiSalva() {
        await cy.get(elements.myAccount()).invoke('text').should('contain', 'Account details')
    }
}

export default alteraSenha