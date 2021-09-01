Feature: Adicionar produtos no Carrinho

 Scenario: Adicionar um produto ao carrinho
    Given que realizo login no site 
    When  acesso a tela de laptops 
    Then  valido se é possível adicionar um produto no carrinho com as infomações refletindo corretamente
 
 Scenario: Adicionar mais de um produto no carrinho
   Given que realizo login no site
   When acesso a tela de produtos
   And  adiciono dois produtos diferentes no carrinho
   Then valido se as informações refletem corretamente no carrinho
 
 Scenario: Editar Produto no carrinho e aumentar a quantidade do produto
    Given que realizo login no site  
    And adiciono um produto no carrinho
    When edito o produto
    Then valido se as alterações refletem no carrinho

