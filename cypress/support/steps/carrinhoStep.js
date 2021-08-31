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
    
When("acesso a tela de produtos", () => {
    carrinho.clicarNoProdutoLaptopNaHome();
})

Then("valido se é possível adicionar um produto no carrinho com as infomações refletindo corretamente", () => {
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.validarInformaçõesDoProdutoNoCarrinho();
})