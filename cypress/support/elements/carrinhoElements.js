class carrinhoElements {

//CT01    
homelaptop = () => {return '#laptopsImg'}
acessarProdutoHPChromebookEnergyStart = () => {return '[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)'}
addProdutoNoCarrinho = () => {return '.fixedBtn > .roboto-medium'}
carrinho = () => {return '#menuCart'}
hPChromebookEnergyStart = () => {return 'tr.ng-scope > :nth-child(2) > .roboto-regular'}
qtdHPChromebookEnergyStartNoCarrinho = () => {return ':nth-child(5) > .ng-binding'}
preçoProdutoHPChromebookEnergyStartNoCarrinho = () => {return ':nth-child(6) > .price'}
removerProdutoHPChromebookEnergyStartDoCarrinho = () => {return 'li > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(3) > .closeDiv > .removeProduct'}


//CT02
retornarNaHome = () => {return '.pages > .ng-scope'}
hometablet = () => {return '#tabletsImg'}
acessarProdutoHPProTablet608G1 = () => {return '[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(3)'}
hPProTablet608G1 = () => {return 'tbody > :nth-child(1) > :nth-child(2) > .roboto-regular'}
qtdHPProTablet608G1 = () => {return ':nth-child(1) > :nth-child(5) > .ng-binding'}
removerPrimeiroProdutoDoCarrinho = () => {return ':nth-child(1) > :nth-child(6) > .actions > .remove'}
removerProdutoRestanteDoCarrinho = () => {return '.remove'}
preçoProdutoHPProTablet608G1NoCarrinho = () => {return ':nth-child(1) > :nth-child(6) > .price'}

//CT03
btnEdit = () => {return '.edit'}
btnAumentarQtdDoProduto = () => {return '.plus'}
}

export default carrinhoElements;

