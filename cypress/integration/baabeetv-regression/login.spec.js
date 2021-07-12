describe('I Login into the baabee TV Application', function(){
    it('I launch the application and validate the contents in the page', function(){
        cy.visit('https://dev--sharp-visvesvaraya-cbe343.netlify.app/')

        cy.xpath('//picture//img')
        .should('be.visible')

        cy.xpath("(//h2[contains(@class,'chakra-heading')])[1]")
        .should('have.text', "Welcome to  Baabee TV Admin")

        cy.xpath("(//label[contains(@class,'chakra-form__label')])[1]")
        .should('have.text', "Email Address")

        cy.xpath("(//label[contains(@class,'chakra-form__label')])[2]")
        .should('have.text', "Password")

        cy.contains('Live Online Classes for')
        cy.contains('Kids aged 3-14')
        cy.contains('From Chess to Rubik’s Cube to Easy Peasy English, we elevate your child’s learning and curiosity.')
        cy.contains('From Chess to Rubik’s Cube to Easy Peasy English, we elevate your child’s learning and curiosity.')
        cy.contains('Book a Demo')
        
    })
    
})

