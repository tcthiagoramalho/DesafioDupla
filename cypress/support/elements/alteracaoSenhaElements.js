class alteraSenhaElements {
    btnAbriDrop = () => {return '#menuUserLink'}
    btnConfig = () => {return '#loginMiniTitle > [translate="My_account"]'}
    btnEditDado = () => {return ':nth-child(1) > .blueLink > .floatRigth'}
    btnNovaSenha = () => {return '.link'}

    senhaAtual = () => {return '[a-hint="Old Password"] > .inputContainer > .ng-pristine'}
    novaSenha = () => {return '[a-hint="New Password"] > .inputContainer > .ng-pristine'}
    confirmeSenha = () => {return '[a-hint="Confirm New Password"] > .inputContainer > .ng-pristine'}
    btnSalvar = () => {return '#save_btnundefined'}

    myAccount = () => {return '.sticky'}
}

export default alteraSenhaElements