@fast @i-steps @part1

Feature: Test "I ..." steps - part 1
  As a user of Playwright
  I should be able to use Cucumber
  to run my e2e tests

  Scenario: 'I go to URL' should open corresponding page, 'page title should contain' should verify the title
    Given I go to URL "https://www.saucedemo.com"
    Then page title should be "Swag Labs"
    And page title should contain "ag Lab"

  Scenario: 'I go to page' should open corresponding page
    Given I go to "test1-page"."urlTest1"
    Then page title should be "Test1 Page"

  Scenario: 'I go to page' should open corresponding page (text style step)
    Given I go to urlTest1 from test1-page
    Then page title should be "Test1 Page"

  Scenario: 'I reload the page' should refresh the page, 'should be present' should verify the element
    Given I go to "test1-page"."urlTest1"
    And I reload the page
    Then "test1-page"."linkTest2Page" should be present

  Scenario: 'I reload the page' should refresh the page, 'should be present' should verify the element (text style step)
    Given I go to "test1-page"."urlTest1"
    And I reload the page
    Then linkTest2Page from test1-page should be present

  Scenario: 'number should be present' should verify the number of elements
    Given I go to "test2-page"."urlTest2"
    Then 4 "test2-page"."input" should be present

  Scenario: 'number should be present' should verify the number of elements (text style step)
    Given I go to "test2-page"."urlTest2"
    Then 4 input from test2-page should be present

  Scenario: 'should not be present': link on Page1 test page should not be present, 'I wait for' should wait for 200 ms
    Given I go to "test1-page"."urlTest1"
    And I wait for 200 ms
    Then "test1-page"."linkInvisibleTest2Page" should not be present

  Scenario: 'should not be present': text error on Page1 test page should not be present, 'I wait for' should wait for 200 ms (text style step, XPath)
    Given I go to "test1-page"."urlTest1"
    And I wait for 200 ms
    Then textErrorXPath from test1-page should not be present

  Scenario: 'I click' Page1 test page link should lead to Page2 test page
    Given I go to URL "http://localhost:8001/test1.html"
    When I click "test1-page"."linkTest2Page"
    Then page title should be "Test2 Page"

  Scenario: 'I click' Page1 test page link should lead to Page2 test page (text style step, XPath)
    Given I go to URL "http://localhost:8001/test1.html"
    When I click linkTest2PageXPath from test1-page
    Then page title should be "Test2 Page"

  Scenario: 'I right click' on Right click menu button should open a menu
    Given I go to URL "http://localhost:8001/test1.html"
    When I right click "test1-page"."buttonMenuRightClick"
    Then "test1-page"."blockMenu" should be present

  Scenario: 'I right click' on Right click menu button should open a menu (text style step, XPath)
    Given I go to URL "http://localhost:8001/test1.html"
    When I right click buttonMenuRightClickXPath from test1-page
    Then blockMenu from test1-page should be present

  Scenario: 'I double click' on Page1 test page link should lead to Page2 test page
    Given I go to URL "http://localhost:8001/test1.html"
    When I double click "test1-page"."linkTest2Page"
    Then page title should be "Test2 Page"

  Scenario: 'I double click' on Page1 test page link should lead to Page2 test page (text style step)
    Given I go to URL "http://localhost:8001/test1.html"
    When I double click linkTest2Page from test1-page
    Then page title should be "Test2 Page"

  Scenario: 'I click if present': link on Page1 test page should be clicked if it is visible and lead to Page2 test page
    Given I go to "test1-page"."urlTest1"
    And I wait for 200 ms
    When I click "test1-page"."linkTest2Page" if present
    And I wait for 200 ms
    Then page title should be "Test2 Page"

  Scenario: 'I click if present': link on Page1 test page should not be clicked if it is not present
    Given I go to "test1-page"."urlTest1"
    And I wait for 200 ms
    When I click "test1-page"."linkInvisibleTest2Page" if present
    And I wait for 200 ms
    Then page title should be "Test1 Page"

  Scenario: 'I click if present': link on Page1 test page should be clicked if it is visible and lead to Page2 test page (text style step, XPath)
    Given I go to urlTest1 from test1-page
    And I wait for 200 ms
    When I click linkTest2PageXPath from test1-page if present
    And I wait for 200 ms
    Then page title should be "Test2 Page"

  Scenario: 'I click if present': link on Page1 test page should not be clicked if it is not present (text style step, XPath)
    Given I go to urlTest1 from test1-page
    And I wait for 200 ms
    When I click linkInvisibleTest2PageXPath from test1-page if present
    And I wait for 200 ms
    Then page title should be "Test1 Page"

  Scenario: 'I type' "Green" (string) text inside input should get this text typed in, 'text should be' should verify the text
    Given I go to "test2-page"."urlTest2"
    When I type "Green" into "test2-page"."inputColors"
    Then "test2-page"."blockInputColor" text should be "Green"

  Scenario: 'I type' "Green" (string) text inside input should get this text typed in, 'text should be' should verify the text (text style step)
    Given I go to "test2-page"."urlTest2"
    When I type "Green" into inputColors from test2-page
    Then blockInputColor from test2-page text should be "Green"

  Scenario: 'I type' "Gold" (page object) text inside input should get this text typed in, 'text should be' should verify the text
    Given I go to "test2-page"."urlTest2"
    When I type "test2-page"."textGold" into "test2-page"."inputColors"
    Then "test2-page"."blockInputColor" text should be "test2-page"."textGold"

  Scenario: 'I type' "Gold" (page object) text inside input should get this text typed in, 'text should be' should verify the text (text style step)
    Given I go to "test2-page"."urlTest2"
    When I type textGold from test2-page into inputColors from test2-page
    Then blockInputColor from test2-page text should be textGold from test2-page

  Scenario: 'I clear and type' "Green" (string) text inside input should overwrite the text, 'input should be' should verify the input
    Given I go to "test2-page"."urlTest2"
    And I type "Yellow" into "test2-page"."inputColors"
    When I clear "test2-page"."inputColors" and type "Green"
    Then "test2-page"."inputColors" input should be "Green"

  Scenario: 'I clear and type' "Green" (string) text inside input should overwrite the text (text style step), 'input should be' should verify the input (text style step)
    Given I go to "test2-page"."urlTest2"
    And I type "Yellow" into inputColors from test2-page
    When I clear inputColors from test2-page and type "Green"
    Then inputColors from test2-page input should be "Green"

  Scenario: 'I clear and type' "Gold" (page object) text inside input should overwrite the text, 'input should be', 'input length should be' should verify the input
    Given I go to "test2-page"."urlTest2"
    And I type "test2-page"."textIndigo" into "test2-page"."inputColors"
    When I clear "test2-page"."inputColors" and type "test2-page"."textGold"
    Then "test2-page"."inputColors" input should be "test2-page"."textGold"
    And "test2-page"."inputColors" input length should be 4

  Scenario: 'I clear and type' "Gold" (page object) text inside input should overwrite the text (text style step), 'input should be', 'input length should be' should verify the input (text style step)
    Given I go to "test2-page"."urlTest2"
    And I type textIndigo from test2-page into inputColors from test2-page
    When I clear inputColors from test2-page and type textGold from test2-page
    Then inputColors from test2-page input should be textGold from test2-page
    And inputColors from test2-page input length should be 4

  Scenario: 'I select' "Green" (string) option text inside select dropdown should get this option selected, 'input should contain' should verify the input
    Given I go to "test2-page"."urlTest2"
    When I select "Green" in "test2-page"."dropdownColors"
    Then "test2-page"."dropdownColors" input should contain "een"

  Scenario: 'I select' "Green" (string) option text inside select dropdown should get this option selected, 'input should contain' should verify the input (text style step)
    Given I go to "test2-page"."urlTest2"
    When I select "Green" in dropdownColors from test2-page
    Then dropdownColors from test2-page input should contain "een"

  Scenario: 'I select' "Gold" (page object) option text inside select dropdown should get this option selected, 'input should contain' should verify the input
    Given I go to "test2-page"."urlTest2"
    When I select "test2-page"."textGold" in "test2-page"."dropdownColors"
    Then "test2-page"."dropdownColors" input should contain "test2-page"."textPartGold"

  Scenario: 'I select' "Gold" (page object) option text inside select dropdown should get this option selected, 'input should contain' should verify the input (text style step)
    Given I go to "test2-page"."urlTest2"
    When I select textGold from test2-page in dropdownColors from test2-page
    Then dropdownColors from test2-page input should contain textPartGold from test2-page
