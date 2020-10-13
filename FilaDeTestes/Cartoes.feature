Feature: Acessar Cartões Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico no botão Peça seu Cartão na opção Cartôes Crefisa
        When clico no botão Agende uma Visita na página de Cartões Crefisa
        When clico na opção Para Você
        Then aparece um popup com o titulo Para Você