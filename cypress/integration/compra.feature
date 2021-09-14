Feature:  Realizar compra no site 

    Background: Acesso ao site 
        Given que acesso o site do shopping
        And realizo login no site 
        And adiciono produtos diferentes no carrinho

    Scenario: Realizar compra no site com SafePay
        When informo o SafePay como forma de pagamento
        Then realizo a compra com sucesso


    Scenario:  Realizar compra no site com MasterCredit
        When informo o MasterCredit como forma de pagamento
        Then realizo a compra com sucesso