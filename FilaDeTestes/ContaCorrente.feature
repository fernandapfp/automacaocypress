Feature: Acessar Conta Corrente Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico no botão Abra sua Conta do card Conta Corrente Crefisa
        When clico no botão Abra sua Conta na página Conta Corrente
        When preencho o formulário
        And clico no botão Enviar
        Then direcionará para a página Parabéns