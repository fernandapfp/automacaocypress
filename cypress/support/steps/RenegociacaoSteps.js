/* global Given, Then, When */

import RenegociacaoPage from '../pageobjects/RenegociacaoPage'
const renegociacaoPage = new RenegociacaoPage

Given("acesso o site da Crefisa", () => {
    renegociacaoPage.acessarSite(); 
})

When("clico na seta para deslizar os cards de produtos", () => {
    renegociacaoPage.setaDeslizar(); 
    renegociacaoPage.screenshot();  
})

When("clico na seta para deslizar os cards de produtos", () => {
    renegociacaoPage.setaDeslizar();
    renegociacaoPage.screenshot();  
})

When("clico no botão Renegociar Minha Dívida na opção de Renegociação", () => {
    renegociacaoPage.renegociacao();
    renegociacaoPage.screenshot();  
})

Then("direciona para o cliente informar o cpf", () => {
    renegociacaoPage.validaTitulo();
      
})
