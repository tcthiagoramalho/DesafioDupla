Feature: Adicionar produtos no Carrinho

  Background: 
    Given que acesso o site do shopping
    And realizo login no site

  Scenario: Adicionar um produto ao carrinho
    When acesso a tela de laptops 
    Then valido se é possível adicionar um produto no carrinho com as infomações refletindo corretamente

  Scenario: Adicionar mais de um produto no carrinho
    When acesso a tela de produtos
    And  adiciono dois produtos diferentes no carrinho
    Then valido se as informações refletem corretamente no carrinho

  Scenario: Editar Produto no carrinho e aumentar a quantidade do produto 
    And adiciono um produto no carrinho
    When edito o produto
    Then valido se as alterações refletem no carrinho