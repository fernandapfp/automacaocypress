/// <reference types="Cypress" />

import AgenteElements from '../elements/AgenteElements'
const agenteElements = new AgenteElements
const url = Cypress.config("baseUrl")

class AgentePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Saiba Mais do Agente Crefisa
    saibamais() {
        cy.get(agenteElements.SaibaMais()).contains('Saiba Mais' ).click()
        cy.wait(2000)
    }

    // clica no botão Saiba como se Cadastrar
    saibacomosecadastrar() {
        cy.get(agenteElements.Saibacomosecadastrar()).contains('saiba como se cadastrar ' ).click()
        cy.wait(2000)
    }
    
    //direcionará para a página do Youtube com o video explicativo
    direcionapagina(){
        cy.wait(2000)
    }
     screenshot() { 
    cy.screenshot()
    }
    
}

export default AgentePage;
