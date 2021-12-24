class AppTest{

consent() {
   return cy.get('[class*=qa-consent-agree-btn]')
}

search() {
    return cy.get('#search-tablet')
   
}

selectFromSearch(){
    return cy.get(':nth-child(2) > .autocomplete-item')
}

selectItem() {
return cy.get('.col--product-card > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container').first()
}

addCart() {
return cy.get('button[type="button"]')
}

ProceedCheckout() {
    return cy.get('.qa-proceed-to-checkout', {waitForAnimations: false}, {force: true}, {timeout: 10000})
}

 verifyCart() {
     return cy.get('.m-checkout-list__item-content', { timeout: 30000 })
 }  

returnHome() {
    return cy.get('a[routerlink="/"]')
}

recentlyViewed() {
    return cy.get('[galistname="is-last-viewed-products"] > a')
}

motorcycleCart() {
    return cy.get('p-fmb-vehicles-count > p-fmb-icon > .icon')
}

addVehicleScreen() {
    return cy.get('.o-fmb-select-vehicle__content')
}

choosebrand() {
     cy.get('.gtm_fmb-select-brand > .m-select > .m-select__display').click()
     return cy.get('.gtm_fmb-select-brand .m-select__container .m-select__items-wrapper > ul >li').first()
}

selectYear() {
    cy.get('.gtm_fmb-select-year > .m-select > .m-select__display').should('be.visible').click()
    return cy.get('.gtm_fmb-select-year .m-select__container .m-select__items-wrapper > ul >li').first()
}

selectMode() {
    cy.get('.gtm_fmb-select-model > .m-select > .m-select__display').should('be.visible').click()
    return cy.get('.gtm_fmb-select-model .m-select__container .m-select__items-wrapper > ul >li').first()
}

verifyMotorAdded() {
    return cy.get('.m-added-vehicles')
}

editCart() {
    cy.wait(20000)
    return cy.get('.m-checkout-list__item-actions > .m-button > span', { timeout: 10000 })
}

deletecart() {
    return cy.get('.m-button--remove > span')
}

verifyEmptyCart() {
    return cy.get('.o-checkoutpage__empty-cart > div > h1', { timeout: 10000 })
}

scrollElement() {
    cy.scrollTo('top')
    return cy.get('p-checkout-cart > .m-checkout-box > .m-checkout-box__heading > .m-checkout-box__heading-title > h3', { timeout: 10000 }).scrollIntoView()
}

menu() {
    return cy.get('.o-mobile-header__menu')
}

sort() {
    return cy.get('.col-7 > .o-filter__drawer-trigger > .textsize-small')
}

brand() {
    return cy.get(':nth-child(1) > .o-filter__drawer-section-trigger-title').click().get(':nth-child(1) > .gtm_filter-brands')
}

applySort() {
    return cy.get('.o-filter__drawer-footer > .m-button--navigation')
}

verifyText() {
    return cy.get('.m-product-card-info__title > span')
}

selectElement() {
    return cy.get(':nth-child(1) > a.ng-tns-c66-10 > .ng-fa-icon > .svg-inline--fa > path').click().get(':nth-child(1) > a.ng-tns-c66-10 > .icon-container > .ng-tns-c66-10')
}

}
export default AppTest