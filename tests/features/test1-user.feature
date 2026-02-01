@fast @user-steps @part1

Feature: Test "user ..." steps - part 1
  As a user of Playwright
  I should be able to use Cucumber
  to run my e2e tests

  Scenario: 'user goes to URL' should open corresponding page, 'title should contain' should verify the title
    Given user goes to URL "https://www.saucedemo.com"
    Then page title should be "Swag Labs"
    And page title should contain "ag Lab"

  Scenario: 'user goes to page' should open corresponding page
    Given user goes to "test1-page"."pageTest1"
    Then page title should be "Test1 Page"

  Scenario: 'user goes to page' should open corresponding page (text style step)
    Given user goes to pageTest1 from test1-page
    Then page title should be "Test1 Page"
