/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

const findAccordion = (number) => {
    return `#resources_accordion > .panel-group > :nth-child(${number+1}) > :nth-child(1) > :nth-child(1) > a`;
}

it('deve criar um VDC', () =>{
    loginPage()   
    cy.get('.navbar-minimalize').click()
    cy.get(`[ng-class="{active: main.activeRoute('virtual-datacenters')}"] > a`).click()
    cy.get('h3 > .btn').click()
    cy.wait(300)
    // selecionar o vdc
    cy.get('#vdc-container').select('Tavora - AWS')
    // nome do vdc
    cy.get('#vdc-name').type('VdcTesteCoutoAWS0211')
    cy.wait(2000)
    // fiz uma const para conseguir acessar os sub-menus do vdc
    cy.get(findAccordion(0)).click()
    cy.get('#region_table > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(0)).click()
    cy.get(findAccordion(1)).click()
    cy.get('#template_table > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(1)).click()
    cy.get(findAccordion(2)).click()
    cy.get('#network_table > .table > tbody > :nth-child(9) > [width="30"] > .check').click()
    cy.get('#network_table > .table > tbody > :nth-child(7) > [width="30"] > .check').click()
    cy.get('#network_table > .table > tbody > :nth-child(6) > [width="30"] > .check').click()
    cy.get(findAccordion(2)).click()
    cy.get(findAccordion(3)).click()
    cy.get('#storage_table > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(3)).click()
    cy.get(findAccordion(4)).click()
    cy.get('#flavor_table > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(4)).click()
    cy.get(findAccordion(6)).click()
    cy.get('#host_table > .table > thead.ng-scope > .ng-table-filters > [data-title-text="Nome"] > .filter-cell > .input-filter').type('Couto')
    cy.get('#host_table > .table > tbody > tr.ng-scope > [width="30"] > .check').click()
    cy.get(findAccordion(6)).click()
    cy.get('.btn-success').click()
    cy.wait(3000)
    cy.get('.navbar-minimalize').click()
    cy.wait(700)
    cy.get(`[ng-class="{active: main.activeRoute('tasks')}"] > a`).click()
    cy.get('.navbar-minimalize').click()
    cy.wait(2000)
    cy.get(`[ng-class="{active: main.activeRoute('virtual-datacenters')}"] > a`).click()
    cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('VdcTesteCoutoAWS0211')
    cy.get(`[ng-click="main.goto('/virtual-datacenters/' + row.ucloudIdentifier)"]`).click()
   // cy.wait(5000)
    //cy.get(':nth-child(3) > :nth-child(3) > .btn-default').click()
    //cy.wait(3000)
    //cy.get(findAccordion(3)).click()
    //cy.wait(1000)
    //cy.get('#network_table > .table > tbody > :nth-child(8) > [width="30"] > .check').click()
    //cy.get('.modal-footer > .btn-success').click()
    //cy.get(':nth-child(3) > .btn-warning').click()
    //cy.get('.confirm').click()
    //cy.get('[style="margin-left:1em;margin-bottom:1em"] > .btn-danger').click()
    //cy.get('.confirm').click()
    //cy.get('.confirm').click()
    cy.get(':nth-child(3) > .btn-warning').click()
    cy.get('.confirm').click()
    cy.wait(3000)
    cy.get('[style="margin-left:1em;margin-bottom:1em"] > .btn-danger').click()
    cy.get('.confirm').click()
    cy.get('.confirm').click()
})
