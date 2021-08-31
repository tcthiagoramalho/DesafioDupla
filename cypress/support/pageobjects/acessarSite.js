/// <reference types ="cypress"/>

const urlSite = Cypress.config("baseUrl")

class site {
    
    AbrirUrl(){
        cy.visit(urlSite)
    }

}

export default site;