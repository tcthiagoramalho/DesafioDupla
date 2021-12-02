/* global Given, And, When, Then*/

import usersPage from "../pageobjects/usersPage"
import alteraSenha from "../pageobjects/alteracaoSenhaPage";
import loginPage from "../pageobjects/loginPage";
const users = require("../../fixtures/users.json")

const login = new usersPage
const senha = new alteraSenha
const logar = new loginPage

const nameUser = users.alteraSenha.nameUser
const novaSenha = users.alteraSenha.novaSenha
const senhaAnterior = users.alteraSenha.senhaAtual

When(/^acesso as configuracoes da conta$/, () => {
	senha.acessoConfig();
});

And(/^realizo login com user TcAlteraSenha$/, () => {
	login.userTcAlteraSenha();
});

And(/^altero a senha$/, async () => {
	await senha.alterarSenha();
});

And(/^faco o sign out$/, async () => {
	await logar.signOut();
});

And(/^tento logar com senha antiga$/, async () => {
	await logar.preencherDadosDeLoginAposSingout(nameUser, senhaAnterior);
	await logar.signIn();
	await logar.validarMsgDadosInvalidos();
});

And(/^faco o login com nova senha$/, () => {
	logar.novaTentativaDeSenha(novaSenha);
	logar.signIn();
	logar.validaUserLogado(nameUser);
});

Then(/^salvo e valido que senha foi alterada$/, async () => {
    await senha.salvarAlteracao();
	await senha.validarQueAlteraçãoFoiSalva();
});

And(/^volto massa ao estado original$/, async () => {
	await senha.acessoConfig();
	await senha.alterarParaSenhaAntiga();
	await senha.salvarAlteracao();
	await senha.validarQueAlteraçãoFoiSalva();
});
