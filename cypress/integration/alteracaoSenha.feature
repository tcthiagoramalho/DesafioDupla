Feature: fazer alteração da senha do user 

  Scenario: alterar senha 
    Given que acesso o site do shopping
    And realizo login com user TcAlteraSenha
    When acesso as configuracoes da conta
    And altero a senha
    Then salvo e valido que senha foi alterada
    And faco o sign out
    And tento logar com senha antiga
    And faco o login com nova senha
