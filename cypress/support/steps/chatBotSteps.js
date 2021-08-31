/* global Given, And, When, Then*/

import acessarSite from "../pageobjects/acessarSite"
import loginPage from "../pageobjects/loginPage";
import chatBot from "../pageobjects/chatBotPage";

const urlSite = new acessarSite
const login = new loginPage
const chat = new chatBot

Given(/^que estou logado no site$/, () => {
	urlSite.AbrirUrl();

    login.preencherDadosDeLogin();
    login.signIn()
});


And(/^valido o botão de converse conosco$/, () => {
	chat.validarBtnChat();
});


When(/^acesso o chat$/, () => {
    chat.acessarChat();
});


And(/^envio uma mensagem no chat$/, () => {
    chat.envioDeMensagem();
});


Then(/^valido a mensagem padão de retorno$/, () => {
	chat.respostaPadrao();
});


