/// <reference types="cypress" />

import regex from "../utils/wordFind"

describe('Encontrar palavras', () => {
    it('Buscando em site', async () => {
        let text = 'This is a string. and is text, and is test and maria is work'
        let site = await regex.getSiteBody('https://bitbucket.org/dasa_desenv/nav-bff-paciente-automation/commits/f9ddaf56b6f53194e3d913d5718249590b9ad9d5');
        let logCount = regex.countWordRegEx(text, 'is');
        let siteCount = regex.countWordRegEx(site, 'uol');
        let log = regex.findWordRegEx(text, 'is');
        cy.log(log)
        cy.log(logCount)
        cy.log(siteCount)
    })
})