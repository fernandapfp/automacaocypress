/* global Given, Then, When */

import DuplicatasPage from '../pageobjects/DuplicatasPage'
const duplicatasPage = new DuplicatasPage

Given("acesso o site da Crefisa", () => {
    duplicatasPage.acessarSite(); 
})

When("clico na seta para deslizar os cards de produtos", () => {
    duplicatasPage.setaDeslizar(); 
    duplicatasPage.screenshot();  
})

When("clico na seta para deslizar os cards de produtos", () => {
    duplicatasPage.setaDeslizar();
    duplicatasPage.screenshot();  
})

When("clico na seta para deslizar os cards de produtos", () => {
    duplicatasPage.setaDeslizar();
    duplicatasPage.screenshot();  
})

When("clico no botão Agende uma Visita na opção de Duplicatas", () => {
    duplicatasPage.agendeUmaVisita();
    duplicatasPage.screenshot();  
})

When("clico no botão Para Você na pagina de Agende uma Visita", () => {
    duplicatasPage.paraVoce();
    duplicatasPage.screenshot();  
})

Then("direciona para a tela Para Você", () => {
    duplicatasPage.validaTitulo();
      
})