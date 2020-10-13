/// <reference types="Cypress" />

import CartoesElements from '../elements/CartoesElements'
const cartoesElements = new CartoesElements
const url = Cypress.config("baseUrl")

class CartoesPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // clico no botão Peça seu Cartão na opção Cartôes Crefisa
    pecaSeuCartao() {
        cy.get(cartoesElements.BotaoPecaSeuCartao()).contains('Peça seu cartão').click()
        cy.wait(2000)
    }

    // clico no botão Agende uma Visita na página de Cartões Crefisa
    agendeUmaVisita() {
        cy.get(cartoesElements.BotaoAgendeUmaVisita()).contains('Agende uma visita').click()
        cy.wait(2000)
    } 
   
    // clico na opção Para Você
    paraVoce() {
        cy.get(cartoesElements.ParaVoce()).contains('Para você').click()
        cy.wait(2000)
    }

    // aparece um popup com o titulo Para Você
    tituloPagina(){
        cy.get(cartoesElements.Titulopagina()).contains('Para você')
        cy.wait(2000)
      
    } 
 
    screenshot() { 
    cy.screenshot()
    }

}
    export default CartoesPage;