Feature: Acessar Duplicatas Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico na seta para deslizar os cards de produtos
        When clico na seta para deslizar os cards de produtos
        When clico na seta para deslizar os cards de produtos
        When clico no botão Agende uma Visita na opção de Duplicatas
        When clico no botão Para Você na pagina de Agende uma Visita
        Then direciona para a tela Para Você