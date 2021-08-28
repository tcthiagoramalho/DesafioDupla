/// <reference types ="cypress"/>
import cadastroElements from "../elements/cadastroElements";
const Elements = new cadastroElements


class cadastroPage{ 
clicarMenuUsuario(){ 
    cy.wait(2000) 
    cy.get(Elements.BtnMenuUsuario()).click(); 
}

clicarCreateNewAccount(){
    cy.get(Elements.CreateNewAccount()).click(); 
}

 inserirUserName(){ 
    cy.get(Elements.UserName()).type("testedupla") 
}

inserirEmail(){ 
    cy.get(Elements.CadastroEmail()).type("testedupla@teste.com") 
}

inserirPassword(){
    cy.get(Elements.Password()).type("Dl123456") 
    cy.get(Elements.ConfirmPassword()).type("Dl123456") 
}

inserirFirstName(){
    cy.get(Elements.FirstName()).type("Teste")
 }

inserirLastName(){ 
    cy.get(Elements.LastName()).type("Dupla")
 }
inserirPhone(){
    cy.get(Elements.Phone()).type("1111111111")
 }

selecionarCountry(){
    cy.get(Elements.Country()).select("Brazil")
 }

inserirCity(){
    cy.get(Elements.City()).type("São Paulo")
 }

inserirAddress(){
    cy.get(Elements.Address()).type("Rua do teste 500")
 }

inserirState(){
    cy.get(Elements.State()).type("São Paulo")
 }

inserirPostalCode(){
    cy.get(Elements.PostalCode()).type("086940SP")
 }

clicarBotãoDeCondição(){
    cy.get(Elements.BtnAcceptCondition()).click();
 }

clicarBotãoRegister(){ cy.get(Elements.BtnRegister()).click(); 

}
}


export default cadastroPage;