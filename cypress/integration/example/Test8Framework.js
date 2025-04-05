import cypress from "cypress";
import HomePage from "../../support/pageObjects/HomePage";

describe('End to End ecommer Test', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()
        })

    })
    it('Submit Order', function () {


        const productName = "Nokia Edge"
        this.homepage.goTo(cypress.env('url') + "loginpagePractise/")
        const productPage = this.homepage.login(this.data.username, this.data.password)
        productPage.pageValidation()
        productPage.getCartCount.should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        let sum = 0
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })

        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain', 'Success')



    });

});