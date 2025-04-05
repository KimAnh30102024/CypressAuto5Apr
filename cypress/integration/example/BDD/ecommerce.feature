Feature: End to End Ecommerce Validation
Scenario: Ecommerce products delivery
Given I am on Ecommerce page
When I log in to the application
And  I add item to Cart and checkout
And validate the total price limit
Then Select the contry submit and validate the Thank You