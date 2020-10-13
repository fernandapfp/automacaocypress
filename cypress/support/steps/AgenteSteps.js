/* global Given, Then, When */

import AgentePage from '../pageobjects/AgentePage'
const agentePage = new AgentePage

Given("acesso o site da Crefisa", () => {
    agentePage.acessarSite(); 
    })

When("clico no botão Saiba Mais do Agente Crefisa", () => {
    agentePage.saibamais();
    agentePage.screenshot();  
})

When("clico no botão Saiba como se Cadastrar", () => {
    agentePage.saibacomosecadastrar();
    Agentepage.screenshot();  
})

Then(" direcionará para a página do Youtube com o video explicativo", () => {
    agentePage.direcionapagina();
    agentePage.screenshot();
})
