Feature: Acessar Câmbio Crefisa

    Scenario: Acessar a página Agente Crefisa
        Given acesso o site da Crefisa
        When clico na seta para deslizar os cards de produtos
        When clico no botão Faça uma Simulação na opção de Câmbio Crefisa
        When clico no botão Continuar, na janela Cadastre-se e Simule
        Then a pagina desce até as instruções para cadastro no Crefisa Mais