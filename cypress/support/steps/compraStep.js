/* global Given, And, When, Then*/

import usersPage from "../pageobjects/usersPage"
import carrinhoPage from "../pageobjects/carrinhoPage"
import compraPage from "../pageobjects/compraPage"

const login = new usersPage
const carrinho = new carrinhoPage
const compra = new compraPage


And(/^realizo login no site$/, () => {
	login.userthiagoT();
});

And(/^adiciono produtos diferentes no carrinho$/, () => {
	carrinho.clicarNoProdutoLaptopNaHome();
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.retornarNaHomeDeProdutos();
    carrinho.acessarOsProdutosDeTablet();
    carrinho.adicionarTablet608G1NoCarrinho();
    carrinho.acessarCarrinho();
    carrinho.quantidadeProduto1();
    carrinho.quantidadeProduto2();
    carrinho.valorProduto1();
    carrinho.valorProduto2();
    carrinho.validarValorTotalDosProdutos();
    compra.clicarBtnCheckout();
    compra.valorTotalProduto1();
    compra.valorTotalProduto2();
    compra.valorTotalEnvio();
    compra.valorTotalDaCompra();
    compra.clicarBotaoNext();
});

When(/^informo o SafePay como forma de pagamento$/, () => {	
    compra.selecionarSafePay();
    compra.inserirSafePayUserName();
    compra.clicarBotaoPayNow();   
});

Then(/^realizo a compra com sucesso$/, () => {
	compra.validarCompra();
});


//CT02

When(/^informo o MasterCredit como forma de pagamento$/, () => {
	compra.selecionarMasterCredit();
    compra.informarDadosDoCartao();
    compra.clicarBotaoPayNow();
});

Then(/^realizo a compra com sucesso$/, () => {
	compra.validarCompra();
});
