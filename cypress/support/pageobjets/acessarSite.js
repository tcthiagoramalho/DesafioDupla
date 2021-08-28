/// <reference types ="cypress"/>
const NavegadorUrl = Cypress.config("baseUrl")

class site {
    
    AbrirUrl(){
        cy.visit(NavegadorUrl)
        cy.wait(3100)
    }

}

export default site;