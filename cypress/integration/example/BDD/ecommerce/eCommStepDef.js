import { v4 as uuidv4 } from 'uuid';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage()

Given('I am on Ecommerce page', () => {

    homePage.goTo(cypress.env('url') + "loginpagePractise/")
})
When('I log in to the application', () => {
    this.productPage = homePage.login(this.data.username, this.data.password)
    this.productPage.pageValidation()
    this.productPage.getCartCount.should('have.length', 4)
})

When('I add item to Cart and checkout', function () {

    this.productPage.selectProduct(productName)
    this.productPage.selectFirstProduct()
    this.cartPage = productPage.goToCart()
})
When('validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
    })
})
Then('Select the contry submit and validate the Thank You',function(){
    const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain', 'Success')

})