@fast @user-steps @part1

Feature: Test "user ..." steps - part 1
  As a user of Playwright
  I should be able to use Cucumber
  to run my e2e tests

  Scenario: 'user goes to URL' should open corresponding page, 'title should contain' should verify the title
    Given user goes to URL "https://www.saucedemo.com"
    Then page title should be "Swag Labs"
    And page title should contain "ag Lab"
