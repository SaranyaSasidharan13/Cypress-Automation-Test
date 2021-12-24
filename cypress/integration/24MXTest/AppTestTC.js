import AppTest from '../pageObjects/AppTest'

describe('App Test', function(){
    const apptest = new AppTest()
    beforeEach(() => {
        cy.OpenURL()
        apptest.consent({timeout: 30000}).should('be.visible').click()
    })

    /**
     * Verify user is able to add product to cart.
     */
    it('Verify Cart', function(){
    apptest.search().type('bag')
    apptest.selectFromSearch().click()
    apptest.selectItem().should('be.visible').click()
    apptest.addCart().click()
    apptest.ProceedCheckout().click({force: true})
    apptest.verifyCart().should('be.visible')
    })

    /**
     * Verify recently viewed products are displayed
     */
    it('Verify Recently Viewed', function() {
        apptest.search().type('helmet')
        apptest.selectFromSearch().click()
        apptest.selectItem().should('be.visible').click()
        apptest.search().clear().type('lamp')
        apptest.selectFromSearch().click()
        apptest.selectItem().should('be.visible').click()
        apptest.returnHome().click()
        cy.scrollTo('bottom')
        apptest.recentlyViewed().should('be.visible')
    })

    /**
     * Verify user to add motorcylce to check for parts
     */
    it('Verify add motorcycle', function() {
        apptest.motorcycleCart().click()
        apptest.addVehicleScreen().should('be.visible')
        apptest.choosebrand().click()
        apptest.selectYear().click({force: true})
        apptest.selectMode().click({force: true})
        apptest.verifyMotorAdded().should('be.visible')

    } )

    /**
     * Verify user is able to delete item from cart
     */
    it('Verify delete cart', function() {
        apptest.search().type('bag')
        apptest.selectFromSearch().click()
        apptest.selectItem().should('be.visible').click()
        apptest.addCart().click()
        apptest.ProceedCheckout().click({force: true})
        apptest.scrollElement()
        apptest.editCart().click()
        apptest.deletecart().click()
        apptest.verifyEmptyCart().should('be.visible')
    })

    /**
     * Verify user is able to sort products by brand name
     */
    it('sort by brand', function() {
        apptest.menu().click()
        apptest.selectElement().click()
        apptest.sort().click()
        apptest.brand().click()
        apptest.applySort().click()
        apptest.verifyText().should('contain.text', 'Acerbis')
    }) 

}) 