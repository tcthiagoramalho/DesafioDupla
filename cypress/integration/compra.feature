Feature:  Realizar compra no site 

    Scenario: Realizar compra no site com SafePay
        Given que acesso o site do shopping
        And realizo login no site 
        And adiciono produtos diferentes no carrinho
        When informo o SafePay como forma de pagamento
        Then realizo a compra com sucesso


    Scenario:  Realizar compra no site com MasterCredit
        Given que acesso o site do shopping
        And realizo login no site 
        And adiciono produtos diferentes no carrinho
        When informo o MasterCredit como forma de pagamento
        Then realizo a compra com sucesso