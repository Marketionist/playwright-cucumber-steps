@fast @user-steps @part1

Feature: Test "user ..." steps - part 2
  As a user of Playwright
  I should be able to use Cucumber
  to run my e2e tests

  Scenario: 'user moves to' element should trigger its hovered state, 'text should contain' should verify the text
    Given user goes to URL "http://localhost:8001/test1.html"
    When user moves to "test1-page"."titleTest1"
    Then "test1-page"."blockTextTest" text should contain "test1-page"."txtTest1"

  Scenario: 'user moves to' element should trigger its hovered state, 'text should contain' should verify the text (text style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    When user moves to titleTest1 from test1-page
    Then blockTextTest from test1-page text should contain txtTest1 from test1-page

  Scenario: 'page URL should be' should verify that current URL equals provided string
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should be "http://localhost:8001/test1.html"

  Scenario: 'page URL should be' should verify that current URL equals provided string (Page Object style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should be "test2-page"."urlTest1"

  Scenario: 'page URL should be' should verify that current URL equals provided string (text style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should be urlTest1 from test2-page

  Scenario: 'page URL should contain' should verify that current URL contains provided string
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should contain "/test1.html"

  Scenario: 'page URL should contain' should verify that current URL contains provided string (Page Object style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should contain "test2-page"."pathTest1"

  Scenario: 'page URL should contain' should verify that current URL contains provided string (text style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    Then page URL should contain pathTest1 from test2-page
