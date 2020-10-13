/* global Given, Then, When */

import EmprestimoPage from '../pageobjects/EmprestimoPage'
const emprestimoPage = new EmprestimoPage

Given("acesso o site da Crefisa", () => {
    emprestimoPage.acessarSite();
    
})

When("clico no botão Faça seu Empréstimo", () => {
    emprestimoPage.visualizarEmprestimo();
    emprestimoPage.screenshot();  
})

Then("devo visualizar a página de emprestimo", () => {
    emprestimoPage.validarTitulo();
    emprestimoPage.screenshot();
})
