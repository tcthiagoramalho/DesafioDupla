/* global Given, And, When, Then*/

import users from "../pageobjects/usersPage"
import loginPage from "../pageobjects/loginPage"

const login = new users
const logar = new loginPage 

When(/^informo os dados incorretos$/, () => {
	logar.preencherDadosDeLogin('thiago', '12345');
});

And(/^clico em sign-in$/, () => {
	logar.signIn();
});

Then(/^valido feedback de dados incorretos$/, () => {
	logar.validarMsgDadosInvalidos();
});

Then(/^realizo o login com usuario e senha corretos$/, () => {
	login.userthiagoT();
});