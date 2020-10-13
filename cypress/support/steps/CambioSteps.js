/* global Given, Then, When */

import CambioPage from '../pageobjects/CambioPage'
const cambioPage = new CambioPage

Given("acesso o site da Crefisa", () => {
    cambioPage.acessarSite(); 
})

When("clico na seta para deslizar os cards de produtos", () => {
    cambioPage.setaDeslizar(); 
    cambioPage.screenshot();  
})

When("clico no botão Faça uma Simulação na opção de Câmbio Crefisa", () => {
    cambioPage.facaSimulacao();
    cambioPage.screenshot();  
})

When("clico no botão Continuar, na janela Cadastre-se e Simule", () => {
    cambioPage.continuar();
    cambioPage.screenshot();  
})

Then("a pagina desce até as instruções para cadastro no Crefisa Mais", () => {
    cambioPage.tituloInstrucoes();
      
})
