/// <reference types="Cypress" />

import CambioElements from '../elements/CambioElements'
const cambioElements = new CambioElements
const url = Cypress.config("baseUrl")

class CambioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // clico na seta para deslizar os cards de produtos
    setaDeslizar() {
        cy.get(cambioElements.SetaDeslizar()).click()
        cy.get(cambioElements.SetaDeslizar()).click()
                cy.wait(2000)
    }

    // clico no botão Faça uma Simulação na opção de Câmbio Crefisa
    facaSimulacao() {
        cy.get(cambioElements.BotaoFacaSuaSimulacao()).contains('Faça uma simulação').click()
        //cy.get(cambioElements.BotaoFacaSuaSimulacao()).should('contain', 'Faça uma simulação')
       // cy.get(cambioElements.BotaoFacaSuaSimulacao()).click
        cy.wait(2000)
    } 
   
    // clico no botão Continuar, na janela Cadastre-se e Simule
    continuar() {
        cy.get(cambioElements.Continuar()).contains('Continuar').click()
        cy.wait(2000)
    }

    // a pagina desce até as instruções para cadastro no Crefisa Mais
    tituloInstrucoes(){
        cy.get(cambioElements.TituloInstrucoes()).contains('Veja como é fácil fazer uma transferência')
        cy.wait(2000)
    } 
 
    screenshot() { 
    cy.screenshot()
    }

}
    export default CambioPage;