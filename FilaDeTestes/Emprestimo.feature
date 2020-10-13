Feature: Acessar emprestimo 
    @teste
    Scenario: Acessar a página de emprestimos da Crefisa
        Given acesso o site da Crefisa
        When clico no botão Faça seu Empréstimo
        Then devo visualizar a página de emprestimo