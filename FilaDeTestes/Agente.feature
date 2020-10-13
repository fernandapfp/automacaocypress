Feature: Acessar Agente Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico no botão Saiba Mais do Agente Crefisa
        When clico no botão Saiba como se Cadastrar
        Then direcionará para a página do Youtube com o video explicativo