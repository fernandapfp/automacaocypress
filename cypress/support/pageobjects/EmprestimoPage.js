/// <reference types="Cypress" />

import EmprestimoElements from '../elements/EmprestimoElements'

const emprestimoElements = new EmprestimoElements
const url = Cypress.config("baseUrl")

class EmprestimoPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Faça seu Empréstimo, valida nome do botão, visualiza a página
    visualizarEmprestimo() {
        cy.get(emprestimoElements.FacaseuEmprestimo()).contains('Faça seu empréstimo' ).click()
        cy.wait(2000)
    }
    // Valida o Título
    validarTitulo(){
        cy.get(emprestimoElements.TituloPagina()).contains('Empréstimo Pessoal')
    }

    screenshot() { 
        cy.screenshot()
        }
}

export default EmprestimoPage;
