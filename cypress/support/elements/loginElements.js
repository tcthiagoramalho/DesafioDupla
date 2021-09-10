class loginElements {

    btnAbriModalLogin = () => {return '#menuUserLink'}

    username = () => {return '[a-hint="Username"] > .inputContainer > .ng-pristine'}
    password = () => {return '[a-hint="Password"] > .inputContainer > .ng-pristine'}
    userName2 = () => {return '[a-hint="Username"] > .inputContainer > .ng-valid'}
    password2 = () => {return '[a-hint="Password"] > .inputContainer > .ng-valid'}

    signIn = () => {return '#sign_in_btnundefined'}
    signOut = () => {return '#loginMiniTitle > [translate="Sign_out"]'}

    msgDadosInvalidos = () => {return '#signInResultMessage'}
}

export default loginElements