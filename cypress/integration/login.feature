Feature: Realizar login no site

  Background: acesso ao site 
    Given que acesso o site do shopping

  Scenario: Tentar logar com dados incorretos
    When informo os dados incorretos
    And clico em sign-in
    Then valido feedback de dados incorretos

  Scenario: Realizar login com sucesso
    Then realizo o login com usuario e senha corretos