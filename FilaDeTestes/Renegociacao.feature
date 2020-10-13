Feature: Acessar Renegociação Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico na seta para deslizar os cards de produtos
        When clico na seta para deslizar os cards de produtos
        When clico no botão Renegociar Minha Dívida na opção de Renegociação
        Then direciona para o cliente informar o cpf