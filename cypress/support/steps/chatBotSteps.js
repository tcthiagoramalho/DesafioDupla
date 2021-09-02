/* global Given, And, When, Then*/

import acessarSite from "../pageobjects/acessarSite"
import users from "../pageobjects/usersPage"
import chatBot from "../pageobjects/chatBotPage";

const urlSite = new acessarSite
const chat = new chatBot
const login = new users

Given(/^que acesso o site$/, () => {
	urlSite.AbrirUrl();

    login.userthiagoT();
});


And(/^valido o botão de converse conosco$/, () => {
	chat.validarBtnChat();
});


When(/^acesso o chat$/, () => {
    chat.validarAberturaDoChat();
    chat.acessarChat();
});


And(/^envio uma mensagem no chat$/, () => {
    chat.envioDeMensagem();
});


Then(/^valido a mensagem de resposta do bot$/, () => {
	chat.validarRespostaBot();
});


