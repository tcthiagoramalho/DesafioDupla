class compraElements {

btnCheckout = () => {return '#checkOutButton'}
valorTotalProduto1 = () => {return '#userCart > #toolTipCart > :nth-child(1) > table > tbody > :nth-child(1) > :nth-child(3)'}
valorTotalProduto2 = () => {return '#userCart > #toolTipCart > :nth-child(1) > table > tbody > .lastProduct > :nth-child(3)'}
taxaEnvio = () => {return '#shippingCost'}
valorTotalCompra = () => {return '.roboto-bold > .roboto-medium'}
btnNext = () => {return '#next_btn'}
safePayUserName = () => {return '[a-hint="SafePay username"] > .inputContainer > .ng-valid'}
safePayPassword = () => {return '[a-hint="SafePay password"] > .inputContainer'}
btnPayNow = () => {return '#pay_now_btn_SAFEPAY'}
orderPayment = () => {return '.sticky'}
btnSafePay = () => {return '[data-ng-click="imgRadioButtonClicked(1); checkedRadio = 1"] > input'}


//CT02
btnMasterCredit = () => {return '[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input'}
numeroCartaoCredito = () => {return '#creditCard'}
cVVnumero = () => {return '.creditCard > .inputContainer > .ng-pristine'}
mesValidade = () => {return '[a-hint="MM"] > .inputContainer > .ng-pristine'}
anoValidade = () => {return '[a-hint="YYYY"] > .inputContainer > .ng-pristine'}
limparNomeNoCartao = () => {return '[a-hint="Cardholder name"] > .inputContainer > .ng-pristine'}
nomeNoCartao = () => {return '[a-hint="Cardholder name"] > .inputContainer > .ng-valid'}
btnEdit = () => {return '.edit'}
salvarDadosDoSafePay = () => {return '[ng-show="imgRadioButton == 1"] > .secForm > .option > .ng-valid'}
salvarDadosDoCartao = () => {return '[ng-show="(imgRadioButton == 2) && (noCards || showMasterCart)"] > .secForm > .option > .ng-valid'}

}
export default compraElements;