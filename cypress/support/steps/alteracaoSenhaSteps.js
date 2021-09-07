/* global Given, And, When, Then*/

import usersPage from "../pageobjects/usersPage"
import alteraSenha from "../pageobjects/alteracaoSenhaPage";

const login = new usersPage
const senha = new alteraSenha

When(/^acesso as configuracoes da conta$/, () => {
	senha.acessoConfig();
});

And(/^realizo login com user TcAlteraSenha$/, () => {
	login.userTcAlteraSenha();
});

And(/^altero a senha$/, () => {
	senha.alterarSenha();
});

And(/^faco o sign out$/, () => {
	
});

And(/^tento logar com senha antiga$/, () => {
	
});

And(/^faco o login com nova senha$/, () => {
	
});

Then(/^salvo e valido que senha foi alterada$/, () => {
    senha.salvarAlteracao();
	senha.validarQueAlteraçãoFoiSalva();
});
