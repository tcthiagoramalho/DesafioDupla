/* global Given, When, Then*/

import acessarSite from "../pageobjects/acessarSite"
import loginPage from "../pageobjects/loginPage"

const AcessarSite = new acessarSite
const login = new loginPage


Given(/^que acesso o site$/, () => {
	AcessarSite.AbrirUrl();
});


When(/^informo os dados corretos de login$/, () => {
	
});

And(/^relaizo o sign in $/, () => {
	
});


Then(/^valido que estou logando no site$/, () => {
	
});
