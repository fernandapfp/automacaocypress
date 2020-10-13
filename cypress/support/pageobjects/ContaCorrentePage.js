/// <reference types="Cypress" />

import ContaCorrenteElements from '../elements/ContaCorrenteElements'
const contaCorrenteElements = new ContaCorrenteElements
const url = Cypress.config("baseUrl")

class ContaCorrentePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // clica no botão 'Abra sua Conta' do card Conta Corrente Crefisa
    abraSuaConta() {
        cy.get(contaCorrenteElements.AbraSuaConta()).contains('Abra sua conta').click()
        cy.wait(2000)
    }

    // clica no botão 'Abra sua Conta' na página Conta Corrente
    abraSuaConta2() {
        cy.get(contaCorrenteElements.AbraSuaConta2()).contains('Abra sua Conta').click()
        cy.wait(2000)
    } 

    // preencho o formulário
    preencherFormulario() {
        cy.get(contaCorrenteElements.FormularioNome()).type('sjkdhflshf kjhfks')
        cy.get(contaCorrenteElements.FormularioTelefone()).type('11999999999')
        cy.get(contaCorrenteElements.FormularioEmail()).type('sjkdhflshf@kjhfks.com')
        cy.get(contaCorrenteElements.FormularioCPF()).type('37337337388')
        cy.wait(2000)
    }
    
    // clico no botão Enviar
    enviar() {
        cy.get(contaCorrenteElements.Enviar()).contains('Enviar').click()
        cy.wait(2000)
    }

    // direcionará para a página Parabéns e Valida o Título
    validarTitulo(){
        cy.get(contaCorrenteElements.Titulopagina()).contains('Parabéns!')
        cy.wait(2000)
      
    } 
 
    screenshot() { 
    cy.screenshot()
    }

}

export default ContaCorrentePage;
