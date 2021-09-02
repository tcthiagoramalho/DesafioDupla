/* global Given, And, When, Then*/

import chatBot from "../pageobjects/chatBotPage";

const chat = new chatBot

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


