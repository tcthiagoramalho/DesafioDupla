/// <reference types ="cypress"/>

import cadastroElements from "../elements/cadastroElements";
import loginPage from "./loginPage";

const Elements = new cadastroElements
const login = new loginPage

const dadocad = require('../../fixtures/dadosCad.json')
const userName = dadocad.account.userName
const email = dadocad.account.email
const senha = dadocad.account.senha
const firsName = dadocad.personal.firsName
const lastName = dadocad.personal.lastName
const phone = dadocad.personal.phone
const country = dadocad.address.country
const city = dadocad.address.city
const address = dadocad.address.address
const region = dadocad.address.region
const cep = dadocad.address.cep

class cadastroPage{ 

    clicarMenuUsuario() { 
        cy.get(Elements.BtnMenuUsuario()).click(); 
    }

    clicarCreateNewAccount() {
        cy.get(Elements.CreateNewAccount()).click(); 
    }

    inserirUserName() { 
        cy.get(Elements.UserName()).type(userName) 
    }

    inserirEmail() { 
        cy.get(Elements.CadastroEmail()).type(email) 
    }

    inserirPassword() {
        cy.get(Elements.Password()).type(senha) 
        cy.get(Elements.ConfirmPassword()).type(senha) 
    }

    inserirFirstName() {
        cy.get(Elements.FirstName()).type(firsName)
    }

    inserirLastName() { 
        cy.get(Elements.LastName()).type(lastName)
    }
    inserirPhone() {
        cy.get(Elements.Phone()).type(phone)
    }

    selecionarCountry() {
        cy.get(Elements.Country()).select(country)
    }

    inserirCity() {
        cy.get(Elements.City()).type(city)
    }

    inserirAddress() {
        cy.get(Elements.Address()).type(address)
    }

    inserirState() {
        cy.get(Elements.State()).type(region)
    }

    inserirPostalCode() {
        cy.get(Elements.PostalCode()).type(cep)
    }

    clicarBotãoDeCondição() {
        cy.get(Elements.BtnAcceptCondition()).click();
    }

    clicarBotãoRegister() { 
        cy.get(Elements.BtnRegister()).click(); 
    }

    validarUser() {
        login.validaUserLogado(userName);
    }
}


export default cadastroPage;