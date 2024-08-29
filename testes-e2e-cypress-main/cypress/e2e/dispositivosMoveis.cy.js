describe('Testando dispositivos móveis', () => {
    beforeEach(() => {
        /* Configura a viewport para uma resolução de 720p (1280px x 720px) */
        cy.viewport(1280, 720);
      });
    it('Deve existir um menu burguer', () => {
   
        cy.visit('/')
        
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

   		
    })

   
    })
