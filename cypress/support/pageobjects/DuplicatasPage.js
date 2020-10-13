/// <reference types="Cypress" />

import DuplicatasElements from '../elements/DuplicatasElements'
const duplicatasElements = new DuplicatasElements
const url = Cypress.config("baseUrl")

class DuplicatasPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(duplicatasElements.SetaDeslizar()).click()
        cy.wait(2000)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(duplicatasElements.SetaDeslizar()).click()
        cy.wait(2000)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(duplicatasElements.SetaDeslizar()).click()
        cy.wait(2000)
    }

    // clico no botão Agende uma Visita na opção de Duplicatas
    agendeUmaVisita() {
        cy.get(duplicatasElements.BotaoAgendeUmaVisita()).contains('Agende uma visita').click()
        cy.wait(2000)
    } 

    // clico no botão Para Você na pagina de Agende uma Visita
    paraVoce() {
        cy.get(duplicatasElements.BotaoParaVoce()).contains('Para você').click()
        cy.wait(2000)
    }
   
    // direciona para a tela Para Você
    validaTitulo(){
        cy.get(duplicatasElements.ValidarTitulo()).contains('Para você')
        cy.wait(2000)
    } 
 
    screenshot() { 
    cy.screenshot()
    }

}
    export default DuplicatasPage;