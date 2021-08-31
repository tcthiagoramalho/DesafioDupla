/// <reference types ="cypress"/>

import chatBotElements from "../elements/chatBotElements"

const chatElements = new chatBotElements

class chat {

    validarBtnChat() {
        cy.scrollTo(0, 3000)

        cy.get(chatElements.btnChat()).invoke('text').should('to.be.eq', 'CHAT WITH US')
    }

    acessarChat() {
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get(chatElements.btnAcessaChat()).click({force: true})
        cy.get('@winOpen').should('be.called')

        cy.visit('https://advantageonlineshopping.com/chat.html')
    }

    envioDeMensagem() {
        cy.get(chatElements.msgOne()).invoke('text').should('contain', 'Server connect.')

        cy.get(chatElements.campoDetext()).type('oi')
        cy.get(chatElements.btnEnviarMsg()).click()
    }

    respostaPadrao() {
        cy.get(chatElements.msgTwo()).invoke('text').should('contain', '')
    }


}

export default chat