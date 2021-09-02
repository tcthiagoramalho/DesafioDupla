Feature: Interagir com chatbot 

Scenario: enviar uma mensagem
    Given que acesso o site 
    And valido o botão de converse conosco 
    When acesso o chat
    And envio uma mensagem no chat 
    Then valido a mensagem de resposta do bot