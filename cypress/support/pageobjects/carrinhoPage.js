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

    validarInformaçõesDoProdutoHPNoCarrinho(){
        cy.get(Elements.carrinho()).click();
        cy.get(Elements.hPChromebookEnergyStart()).contains('HP CHROMEBOOK 14 G1(ENERGY STAR)');
        cy.get(Elements.qtdHPChromebookEnergyStartNoCarrinho()).contains('1');
        cy.get(Elements.preçoProdutoHPChromebookEnergyStartNoCarrinho()).contains('$299.99')
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

    validarInformaçõesDosProdutosNoCarrinho(){
        cy.get(Elements.carrinho()).click();
        cy.get(Elements.hPProTablet608G1()).contains('HP PRO TABLET 608 G1');
        cy.get(Elements.hPChromebookEnergyStart()).contains('HP CHROMEBOOK 14 G1(ENERGY STAR)');
        cy.get(Elements.qtdHPProTablet608G1()).should('contain' , '1');
        cy.get(Elements.qtdHPChromebookEnergyStartNoCarrinho()).should('contain', '1');
        cy.get(Elements.preçoProdutoHPProTablet608G1NoCarrinho()).should('contain', '$479.00');
        cy.get(Elements.preçoProdutoHPChromebookEnergyStartNoCarrinho()).contains('$299.99');
    }

    removerProdutosCarrinho(){
        cy.screenshot();
        cy.get(Elements.removerPrimeiroProdutoDoCarrinho()).click();
        cy.get(Elements.removerProdutoRestanteDoCarrinho()).click();

    }

    //CT03

    validarIformaçõesAntesDeEditar(){
        cy.get(Elements.carrinho()).click();
        cy.get(Elements.hPProTablet608G1()).contains('HP PRO TABLET 608 G1');
        cy.get(Elements.qtdHPProTablet608G1()).should('contain' , '1');
        cy.get(Elements.preçoProdutoHPProTablet608G1NoCarrinho()).should('contain', '$479.00');
    }
    editarProdutoNoCarrinho(){  
        cy.get(Elements.btnEdit()).click();
        cy.get(Elements.btnAumentarQtdDoProduto()).click();
        cy.get(Elements.addProdutoNoCarrinho()).click();
    }

    validarIformaçõesDepoisDeEditar(){
        cy.get(Elements.qtdHPProTablet608G1()).should('contain' , '2');
        cy.get(Elements.preçoProdutoHPProTablet608G1NoCarrinho()).should('contain', '$958.00');
        cy.screenshot();
    }

    removerProdutoTabletDoCarrinho(){
        cy.get(Elements.removerProdutoRestanteDoCarrinho()).click();
    }
}
export  default carrinhoPage;