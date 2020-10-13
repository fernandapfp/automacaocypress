/// <reference types="Cypress" />

import RenegociacaoElements from '../elements/RenegociacaoElements'
const renegociacaoElements = new RenegociacaoElements
const url = Cypress.config("baseUrl")

class RenegociacaoPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(renegociacaoElements.SetaDeslizar()).click()
        cy.wait(2000)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(renegociacaoElements.SetaDeslizar()).click()
        cy.wait(2000)
    }

    // clico no botão Renegociar Minha Dívida na opção de Renegociação
    renegociacao() {
        cy.get(renegociacaoElements.BotaoRenogociar()).contains('Renegociar minha dívida').click()
        cy.wait(2000)
    } 
   
    // direciona para o cliente informar o cpf e valida o titulo
    validaTitulo(){
        cy.get(renegociacaoElements.ValidarTitulo()).contains('Negocie suas dívidas por aqui!')
        cy.wait(2000)
    } 
 
    screenshot() { 
    cy.screenshot()
    }

}
    export default RenegociacaoPage;