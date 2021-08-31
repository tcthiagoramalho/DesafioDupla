Feature: Interagir com chatbot 

Scenario: enviar uma mensagem
Given que estou logado no site 
And valido o botão de converse conosco 
When acesso o chat
And envio uma mensagem no chat 
Then valido a mensagem padão de retorno 