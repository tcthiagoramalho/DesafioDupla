/* global Given, And, When, Then*/

import acessarSite from "../pageobjects/acessarSite"
import carrinhoPage from "../pageobjects/carrinhoPage"
import loginPage from "../pageobjects/loginPage"

const AcessarSite = new acessarSite
const login = new loginPage
const carrinho = new carrinhoPage


//CT01
Given ("que realizo login no site", () => {
    AcessarSite.AbrirUrl();
    login.preencherDadosDeLogin();
    login.signIn()
    login.validaUserLogado();
}) 
    
When("acesso a tela de laptops", () => {
    carrinho.clicarNoProdutoLaptopNaHome();
})

Then("valido se é possível adicionar um produto no carrinho com as infomações refletindo corretamente", () => {
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.validarInformaçõesDoProdutoHPNoCarrinho();
    carrinho.removerProdutoLaptopCarrinho();
})

//CT02
When("acesso a tela de produtos", () => {
    carrinho.clicarNoProdutoLaptopNaHome();
})

And("adiciono dois produtos diferentes no carrinho", () => {
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.retornarNaHomeDeProdutos();
    carrinho.acessarOsProdutosDeTablet();
    carrinho.adicionarTablet608G1NoCarrinho();
    
})

Then("valido se as informações refletem corretamente no carrinho", () => {
    carrinho.validarInformaçõesDosProdutosNoCarrinho();
    carrinho.removerProdutosCarrinho();
})


//CT03
And("adiciono um produto no carrinho", () =>{
    carrinho.acessarOsProdutosDeTablet();
    carrinho.adicionarTablet608G1NoCarrinho();
})

When("edito o produto", () => {
    carrinho.validarIformaçõesAntesDeEditar();
    carrinho.editarProdutoNoCarrinho();
})

Then("valido se as alterações refletem no carrinho", () => {
    carrinho.validarIformaçõesDepoisDeEditar();
    carrinho.removerProdutoTabletDoCarrinho();
})