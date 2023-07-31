import HelloWorld from './HelloWorld.vue'


describe('Componente HelloWorld', () => {
  it('deve verificar a mensagem do componente', () => {
    const msg = 'Meu teste de Componente'
    cy.mount(HelloWorld, {
      propsData: {
        msg
      }
    })
    
    cy.get('h1').should('have.text', msg)

  });
})