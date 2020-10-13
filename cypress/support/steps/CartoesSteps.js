/* global Given, Then, When */

import CartoesPage from '../pageobjects/CartoesPage'
const cartoesPage = new CartoesPage

Given("acesso o site da Crefisa", () => {
    cartoesPage.acessarSite(); 
})

When("clico no botão Peça seu Cartão na opção Cartôes Crefisa", () => {
    cartoesPage.pecaSeuCartao(); 
    cartoesPage.screenshot();  
})

When("clico no botão Agende uma Visita na página de Cartões Crefisa", () => {
    cartoesPage.agendeUmaVisita();
    cartoesPage.screenshot();  
})

When("clico na opção Para Você", () => {
    cartoesPage.paraVoce();
    cartoesPage.screenshot();  
})

Then("aparece um popup com o titulo Para Você", () => {
    cartoesPage.tituloPagina();
      
})
