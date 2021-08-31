/// <reference types ="cypress"/>

import carrinhoElements from "../elements/carrinhoElements";

const Elements = new carrinhoElements

class carrinhoPage {

    clicarNoProdutoLaptopNaHome(){
        cy.get(Elements.homelaptop()).click();
    }

    adicionarLaptopHPChromebookEnergyStartNoCarrinho(){
        cy.get(Elements.acessarProdutoHPChromebookEnergyStart()).click();
        cy.get(Elements.addProdutoNoCarrinho()).click();
    }

    validarInformaçõesDoProdutoNoCarrinho(){
        cy.get(Elements.carrinho()).click();
        cy.get(Elements.HPChromebookEnergyStart()).contains('HP CHROMEBOOK 14 G1(ENERGY STAR)');
        cy.get(Elements.qtdHPChromebookEnergyStartNoCarrinho()).contains('1');
        cy.get(Elements.preçoProdutoHPChromebookEnergyStartNoCarrinho()).contains('$299.99')
    }

}
export  default carrinhoPage;