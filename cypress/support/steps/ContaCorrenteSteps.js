/* global Given, Then, When */

import ContaCorrentePage from '../pageobjects/ContaCorrentePage'
const contaCorrentePage = new ContaCorrentePage

Given("acesso o site da Crefisa", () => {
    contaCorrentePage.acessarSite(); 
})

When("clico no botão Abra sua Conta do card Conta Corrente Crefisa", () => {
    contaCorrentePage.abraSuaConta();  
})

When("clico no botão Abra sua Conta na página Conta Corrente", () => {
    contaCorrentePage.abraSuaConta2();
    contaCorrentePage.screenshot();  
})

When("preencho o formulário", () => {
    contaCorrentePage.preencherFormulario();  
    contaCorrentePage.screenshot();  
})

And("clico no botão Enviar", () => {
    contaCorrentePage.enviar();  
    contaCorrentePage.screenshot();  
})

Then("direcionará para a página Parabéns", () => {
    contaCorrentePage.validarTitulo();
    contaCorrentePage.screenshot();  
})
