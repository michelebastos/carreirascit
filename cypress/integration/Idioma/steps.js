/// <reference types = "Cypress" />
 


Given(/^acesse o site ciandt$/, () => {
	cy.visit('/')
	cy.wait(4000);
	//cy.setCookie('cookie-agreed', '2');
	cy.get('.agree-button').click();
	
});

When(/^selecione a opção PT-BR$/, () => {
	cy.get('div[class=globe-selector]').click();
	//cy.get('#swiper-slide-1 > .content-flag-text').click()
	cy.contains('div[class=text-flag]', 'PT').click()
	cy.get('.buttom-select').click()
	cy.url()
      .should('be.equal', 'https://ciandt.com/br/pt-br')
});

Then(/^exibir a legenda PT-BR$/, () => {
	cy.contains('PT-BR').should('be.visible')

});


And(/^exibir o menu em Português$/, () => {
	cy.contains('O que fazemos').should('be.visible');
	cy.contains('Inspire-se').should('be.visible');
	cy.contains('Nosso trabalho').should('be.visible');
	cy.contains('Sobre').should('be.visible');
	cy.contains('Carreiras').should('be.visible');
	cy.contains('Investidores').should('be.visible');
	cy.contains('Contato').should('be.visible');
});




Given(/^acesse o site ciandt$/, () => {
	cy.visit('/')
	cy.wait(4000);
	cy.get('.agree-button').click();
});

When(/^selecione a opção ES-CO$/, () => {
	cy.get('div[class=globe-selector]').click();
	cy.contains('div[class=text-flag]', 'ES').click()
	cy.get('.buttom-select').click()
	cy.url()
      .should('be.equal', 'https://ciandt.com/co/es-co')
  
	//verificar se for redirecionado para 
});

Then(/^exibir a legenda ES-CO$/, () => {
	cy.contains('ES-CO').should('be.visible')
});

Then(/^exibir o menu em Espanhol$/, () => {
	cy.contains('Carreras').should('be.visible');
	cy.contains('Sobre').should('be.visible');
	cy.contains('Qué hacemo').should('be.visible');
	cy.contains('Inspírate').should('be.visible');
	cy.contains('Nuestro trabajo').should('be.visible');
	cy.contains('Inversores').should('be.visible');
	cy.contains('Contacto').should('be.visible');
});




Given(/^acesse o site ciandt$/, () => {
	cy.visit('/')
	cy.wait(4000);
	cy.get('.agree-button').click();
});

When(/^selecione a opçã EN-UK$/, () => {
	cy.get('div[class=globe-selector]').click();
	cy.contains('div[class=text-flag]', 'EN').click()
	cy.get('#swiper-slide-9 > .content-flag-text').click()
	cy.get('.buttom-select').click()
	cy.url()
      .should('be.equal', 'https://ciandt.com/uk/en-gb')
	
});

Then(/^exibir a legenda EN-UK$/, () => {
	cy.contains('EN-UK').should('be.visible')
});

Then(/^exibir o menu em Inglês$/, () => {
	cy.contains('What we do').should('be.visible');
	cy.contains('Get inspired').should('be.visible');
	cy.contains('Our work').should('be.visible');
	cy.contains('About').should('be.visible');
	cy.contains('Careers').should('be.visible');
	cy.contains('Investors').should('be.visible');
	cy.contains('Contact us').should('be.visible');
});



