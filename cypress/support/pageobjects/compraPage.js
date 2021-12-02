/// <reference types ="cypress"/>

import compraElements from "../elements/compraElements";
const Elements = new  compraElements

const pagamentos = require('../../fixtures/pagamentos.json')
const numerocartao = pagamentos.cartao.numeroCartao
const cvv = pagamentos.cartao.cVV
const mes = pagamentos.cartao.mes
const ano = pagamentos.cartao.ano
const nome = pagamentos.cartao.nome
const user = pagamentos.safePay.user
const password = pagamentos.safePay.password

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
    valorTotal = TotalProduto1 + TotalProduto2 + valorEnvio;
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
    cy.get(Elements.safePayUserName()).type(user)
}

inserirSafePayPassword(){
    cy.get(Elements.safePayPassword()).clear();
    cy.get(Elements.safePayPassword()).type(password)
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
    cy.get(Elements.numeroCartaoCredito()).type(numerocartao);
    cy.get(Elements.cVVnumero()).type(cvv);
    cy.get(Elements.mesValidade()).select(mes)
    cy.get(Elements.anoValidade()).select(ano)
    cy.get(Elements.limparNomeNoCartao()).clear();
    cy.get(Elements.nomeNoCartao()).type(nome)
}

}
export default compraPage;