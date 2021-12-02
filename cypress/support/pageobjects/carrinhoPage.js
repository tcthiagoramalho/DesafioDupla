/// <reference types ="cypress"/>

import carrinhoElements from "../elements/carrinhoElements";

const Elements = new carrinhoElements

let QtdProduto1 = 0;
let QtdProduto2 = 0;
let ValorProduto1 = 0;
let ValorProduto2 = 0;
let ValorTotalDosProdutos = 0;

class carrinhoPage {

    clicarNoProdutoLaptopNaHome(){
        cy.get(Elements.homelaptop()).click();
    }

    adicionarLaptopHPChromebookEnergyStartNoCarrinho(){
        cy.get(Elements.acessarProdutoHPChromebookEnergyStart()).click();
        cy.get(Elements.addProdutoNoCarrinho()).click();
    }

    validarNomeDoProdutoHPNoCarrinho(){
        cy.get(Elements.hPChromebookEnergyStart()).contains('HP CHROMEBOOK 14 G1(ENERGY STAR)');      
    }

    quantidadeProduto1(){
        cy.get(Elements.qtdHPChromebookEnergyStartNoCarrinho()).invoke('text').then((QtdProduto1) => {
            cy.log(QtdProduto1)
            .should('contain', QtdProduto1)
        })
    }

    valorProduto1(){
        cy.get(Elements.preçoProdutoHPChromebookEnergyStartNoCarrinho()).invoke('text').then((ValorProduto1) => {
            cy.log(ValorProduto1)
            .should('contain', ValorProduto1)
        })
        cy.screenshot();
    }

    removerProdutoLaptopCarrinho(){
        cy.get(Elements.removerProdutoHPChromebookEnergyStartDoCarrinho()).click();
    }

    //CT02
    retornarNaHomeDeProdutos(){
        cy.get(Elements.retornarNaHome()).contains('HOME').click();
    }

    acessarOsProdutosDeTablet(){
        cy.get(Elements.hometablet()).click();
    }

    adicionarTablet608G1NoCarrinho(){
        cy.get(Elements.acessarProdutoHPProTablet608G1()).click();
        cy.get(Elements.addProdutoNoCarrinho()).click();
    }

    acessarCarrinho(){
        cy.get(Elements.carrinho()).click();
    }

    validarInformaçõesDosNomesNoCarrinho(){
        cy.get(Elements.hPProTablet608G1()).contains('HP PRO TABLET 608 G1');
        cy.get(Elements.hPChromebookEnergyStart()).contains('HP CHROMEBOOK 14 G1(ENERGY STAR)');
    }

    quantidadeProduto2(){
        cy.get(Elements.qtdHPChromebookEnergyStartNoCarrinho()).invoke('text').then((QtdProduto2) => {
            cy.log(QtdProduto2)
            .should('contain', QtdProduto2)
        })
    }

    valorProduto2(){
        cy.get(Elements.preçoProdutoHPChromebookEnergyStartNoCarrinho()).invoke('text').then((ValorProduto2) => {
            cy.log(ValorProduto2)
            .should('contain', ValorProduto2)
        })
    }

    validarValorTotalDosProdutos(){
        const ValorTotalDosProdutos = ValorProduto1 + ValorProduto2;
        cy.get(Elements.valorTotalDosProdutosNoCarrinho()).invoke('text').then((ValorTotalDosProdutos) => {
            cy.log(ValorTotalDosProdutos)
            .should('contain', ValorTotalDosProdutos)
        })
        cy.screenshot();
    }

    removerProdutosCarrinho(){
        cy.screenshot();
        cy.get(Elements.removerPrimeiroProdutoDoCarrinho()).click();
        cy.get(Elements.removerProdutoRestanteDoCarrinho()).click();

    }

    //CT03

    validarNomeDoProdutoTabletNoCarrinho(){
        cy.get(Elements.hPProTablet608G1()).contains('HP PRO TABLET 608 G1');
    }

    editarProdutoNoCarrinho(){  
        cy.get(Elements.btnEdit()).click();
        cy.get(Elements.btnAumentarQtdDoProduto()).click();
        cy.get(Elements.addProdutoNoCarrinho()).click();
    }

    removerProdutoTabletDoCarrinho(){
        cy.get(Elements.removerProdutoRestanteDoCarrinho()).click();
    }
}
export  default carrinhoPage;