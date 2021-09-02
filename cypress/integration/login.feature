Feature: Realizar login no site

    Scenario: Tentar logar com dados incorretos
        Given que acesso o site
        When informo os dados incorretos
        And clico em sign-in
        Then valido feedback de dados incorretos

    Scenario: Realizar login com sucesso
        Given que acesso o site
        Then realizo o login com usuario e senha corretos