/// <reference types ="cypress"/>

import compraElements from "../elements/compraElements";
const Elements = new  compraElements

let valorEnvio = 0;
let TotalProduto1 = 0;
let TotalProduto2 = 0;
let valorTotal = 0;


class compraPage{

clicarBtnCheckout(){
    cy.get(Elements.btnCheckout()).click();
}

valorTotalProduto1(){
    cy.get(Elements.valorTotalProduto1()).invoke('text').then((TotalProduto1) => {
        cy.log(TotalProduto1)
        .should('contain', TotalProduto1)
    })

}

valorTotalProduto2(){
    cy.get(Elements.valorTotalProduto2()).invoke('text').then((TotalProduto2) => {
        cy.log(TotalProduto2)
        .should('contain', TotalProduto2)
    })

}

valorTotalEnvio(){
    cy.get(Elements.taxaEnvio()).invoke('text').then((valorEnvio) => {
        cy.log(valorEnvio)
        .should('contain', valorEnvio)
    })
}

valorTotalDaCompra(){
    const valorTotal = TotalProduto1 + TotalProduto2 + valorEnvio;
        cy.get(Elements.valorTotalCompra()).invoke('text').then((valorTotal) => {
            cy.log(valorTotal)
            .should('contain', valorTotal)
        })
}

clicarBotaoNext(){
    cy.get(Elements.btnNext()).click();
}

inserirSafePayUserName(){
    cy.get(Elements.safePayUserName()).clear()
    cy.get(Elements.safePayUserName()).type("TesteDupla")
}

inserirSafePayPassword(){
    cy.get(Elements.safePayPassword()).clear();
    cy.get(Elements.safePayPassword()).type("Td12345")
}

clicarBotaoPayNow(){
    cy.get(Elements.btnPayNow()).click({force:true});
}

validarCompra(){
    cy.screenshot();
    cy.get(Elements.orderPayment()).should('contain', 'ORDER PAYMENT')
}

selecionarSafePay(){
    cy.get(Elements.btnSafePay()).click();
}

checkBoxSalvarDadosSafePay(){
    cy.get(Elements.salvarDadosDoSafePay()).click()
}


//CT02
selecionarMasterCredit(){
    cy.get(Elements.btnMasterCredit()).click();
}

editarDadosDoCartão(){
    cy.get(Elements.btnEdit()).click();
}

checkBoxSalvarDadosCartão(){
    cy.get(Elements.salvarDadosDoCartao()).click();
}
informarDadosDoCartao(){
    cy.get(Elements.numeroCartaoCredito()).type("5309 6585 7928 3153");
    cy.get(Elements.cVVnumero()).type("0351");
    cy.get(Elements.mesValidade()).select('02')
    cy.get(Elements.anoValidade()).select('2022')
    cy.get(Elements.limparNomeNoCartao()).clear();
    cy.get(Elements.nomeNoCartao()).type("Teste Laercio")
}

}
export default compraPage;