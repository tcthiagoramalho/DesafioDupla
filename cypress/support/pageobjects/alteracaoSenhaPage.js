/// <reference types ="cypress"/>

import alteraSenhaElements from "../elements/alteracaoSenhaElements"

const elements = new alteraSenhaElements
const novaSenha = "Tc54321"
const snehaAtual = "Tc12345"

class alteraSenha {

    acessoConfig() {
        cy.get(elements.btnAbriDrop()).click({force: true})
        cy.get(elements.btnConfig()).click()
        cy.get(elements.btnEditDado()).click()
        cy.get(elements.btnNovaSenha()).click()
    }

    async alterarSenha() {
        await cy.get(elements.senhaAtual()).type(snehaAtual)
        await cy.get(elements.novaSenha()).type(novaSenha)
        await cy.get(elements.confirmeSenha()).type(novaSenha)
    }

    async salvarAlteracao() {
        cy.scrollTo(0, 3000)
        cy.wait(3000)
        await cy.get(elements.btnSalvar()).click({force: true})
    }

    async validarQueAlteraçãoFoiSalva() {
        await cy.get(elements.myAccount()).invoke('text').should('contain', 'MY ACCOUNT')
    }
}

export default alteraSenha