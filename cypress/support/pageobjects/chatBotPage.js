/// <reference types ="cypress"/>

import chatBotElements from "../elements/chatBotElements"

const chatElements = new chatBotElements
const urlChat = Cypress.config("urlChat")

class chat {

    validarBtnChat() {
        cy.scrollTo(0, 3000)

        cy.request({
            method:'GET',
            url:'https://advantageonlineshopping.com/services.properties'
        }).then((response) => {
            expect(response.status).to.equal(200)
        })

        cy.get(chatElements.btnChat()).invoke('text').should('to.be.eq', 'CHAT WITH US')
    }

    validarAberturaDoChat() {
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get(chatElements.btnAcessaChat()).click({force: true})
        cy.get('@winOpen').should('be.called')
    }

    acessarChat() {
        cy.visit(urlChat)
    }

    envioDeMensagem() {
        cy.get(chatElements.msgOne()).invoke('text').should('contain', 'Server connect.')

        cy.get(chatElements.campoDetext()).type('oi')
        cy.get(chatElements.btnEnviarMsg()).click()
    }

    validarRespostaBot() {
        cy.get(chatElements.msgTwo()).invoke('text').should('include', '?')
    }


}

export default chat