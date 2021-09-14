/* global Given, And, When, Then*/

import usersPage from "../pageobjects/usersPage"
import carrinhoPage from "../pageobjects/carrinhoPage"

const login = new usersPage
const carrinho = new carrinhoPage

//CT01
And(/^realizo login no site$/, () => {
	login.userthiagoT();
});

When(/^acesso a tela de laptops$/, () => {
    carrinho.clicarNoProdutoLaptopNaHome();
})

Then(/^valido se é possível adicionar um produto no carrinho com as infomações refletindo corretamente$/, () => {
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.acessarCarrinho();
    carrinho.validarNomeDoProdutoHPNoCarrinho();
    carrinho.quantidadeProduto1();
    carrinho.valorProduto1();
    carrinho.removerProdutoLaptopCarrinho();
})

//CT02
When(/^acesso a tela de produtos$/, () => {
    carrinho.clicarNoProdutoLaptopNaHome();
})

And(/^adiciono dois produtos diferentes no carrinho$/, () => {
    carrinho.adicionarLaptopHPChromebookEnergyStartNoCarrinho();
    carrinho.retornarNaHomeDeProdutos();
    carrinho.acessarOsProdutosDeTablet();
    carrinho.adicionarTablet608G1NoCarrinho();
    
})

Then(/^valido se as informações refletem corretamente no carrinho$/, () => {
    carrinho.acessarCarrinho();
    carrinho.validarInformaçõesDosNomesNoCarrinho();
    carrinho.quantidadeProduto1();
    carrinho.valorProduto1();
    carrinho.quantidadeProduto2();
    carrinho.valorProduto2();
    carrinho.validarValorTotalDosProdutos();
    carrinho.removerProdutosCarrinho();
})


//CT03
And(/^adiciono um produto no carrinho$/, () =>{
    carrinho.acessarOsProdutosDeTablet();
    carrinho.adicionarTablet608G1NoCarrinho();
})

When(/^edito o produto$/, () => {
    carrinho.acessarCarrinho();
    carrinho.validarNomeDoProdutoTabletNoCarrinho();
    carrinho.quantidadeProduto1();
    carrinho.valorProduto1();
    carrinho.editarProdutoNoCarrinho();
})

Then(/^valido se as alterações refletem no carrinho$/, () => {
    carrinho.quantidadeProduto1();
    carrinho.valorProduto1();
    carrinho.removerProdutoTabletDoCarrinho();
})