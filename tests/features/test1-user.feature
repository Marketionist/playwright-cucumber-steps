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

  Scenario: 'user reloads the page' should refresh the page, 'should be present' should verify the element
    Given user goes to "test1-page"."pageTest1"
    And user reloads the page
    Then "test1-page"."linkTest2Page" should be present

  Scenario: 'user reloads the page' should refresh the page, 'should be present' should verify the element (text style step)
    Given user goes to "test1-page"."pageTest1"
    And user reloads the page
    Then linkTest2Page from test1-page should be present

  Scenario: 'number should be present' should verify the number of elements
    Given user goes to "test2-page"."pageTest2"
    Then 4 "test2-page"."input" should be present

  Scenario: 'number should be present' should verify the number of elements (text style step)
    Given user goes to "test2-page"."pageTest2"
    Then 4 input from test2-page should be present

  Scenario: 'should not be present': link on Page1 test page should not be present, 'user waits for' should wait for 200 ms
    Given user goes to "test1-page"."pageTest1"
    And user waits for 200 ms
    Then "test1-page"."linkInvisibleTest2Page" should not be present

  Scenario: 'should not be present': text error on Page1 test page should not be present, 'user waits for' should wait for 200 ms (text style step, XPath)
    Given user goes to "test1-page"."pageTest1"
    And user waits for 200 ms
    Then textErrorXPath from test1-page should not be present

  Scenario: 'user clicks' Page1 test page link should lead to Page2 test page
    Given user goes to URL "http://localhost:8001/test1.html"
    When user clicks "test1-page"."linkTest2Page"
    Then page title should be "Test2 Page"

  Scenario: 'user clicks' Page1 test page link should lead to Page2 test page (text style step, XPath)
    Given user goes to URL "http://localhost:8001/test1.html"
    When user clicks linkTest2PageXPath from test1-page
    Then page title should be "Test2 Page"

  Scenario: 'user right clicks' on Right click menu button should open a menu
    Given user goes to URL "http://localhost:8001/test1.html"
    When user right clicks "test1-page"."buttonMenuRightClick"
    Then "test1-page"."blockMenu" should be present

  Scenario: 'user right clicks' on Right click menu button should open a menu (text style step, XPath)
    Given user goes to URL "http://localhost:8001/test1.html"
    When user right clicks buttonMenuRightClickXPath from test1-page
    Then blockMenu from test1-page should be present

  Scenario: 'user double clicks' on Page1 test page link should lead to Page2 test page
    Given user goes to URL "http://localhost:8001/test1.html"
    When user double clicks "test1-page"."linkTest2Page"
    Then page title should be "Test2 Page"

  Scenario: 'user double clicks' on Page1 test page link should lead to Page2 test page (text style step)
    Given user goes to URL "http://localhost:8001/test1.html"
    When user double clicks linkTest2Page from test1-page
    Then page title should be "Test2 Page"

  Scenario: 'user types' "Green" (string) text inside input should get this text typed in, 'text should be' should verify the text
    Given user goes to "test2-page"."pageTest2"
    When user types "Green" into "test2-page"."inputColors"
    Then "test2-page"."blockInputColor" text should be "Green"

  Scenario: 'user types' "Green" (string) text inside input should get this text typed in, 'text should be' should verify the text (text style step)
    Given user goes to "test2-page"."pageTest2"
    When user types "Green" into inputColors from test2-page
    Then blockInputColor from test2-page text should be "Green"

  Scenario: 'user types' "Gold" (page object) text inside input should get this text typed in, 'text should be' should verify the text
    Given user goes to "test2-page"."pageTest2"
    When user types "test2-page"."textGold" into "test2-page"."inputColors"
    Then "test2-page"."blockInputColor" text should be "test2-page"."textGold"

  Scenario: 'user types' "Gold" (page object) text inside input should get this text typed in, 'text should be' should verify the text (text style step)
    Given user goes to "test2-page"."pageTest2"
    When user types textGold from test2-page into inputColors from test2-page
    Then blockInputColor from test2-page text should be textGold from test2-page

  Scenario: 'user selects' "Green" (string) option text inside select dropdown should get this option selected, 'text should be' should verify the text
    Given user goes to "test2-page"."pageTest2"
    When user selects "Green" in "test2-page"."dropdownColors"
    Then "test2-page"."blockDropdownColor" text should be "green"

  Scenario: 'user selects' "Green" (string) option text inside select dropdown should get this option selected, 'text should be' should verify the text (text style step)
    Given user goes to "test2-page"."pageTest2"
    When user selects "Green" in dropdownColors from test2-page
    Then blockDropdownColor from test2-page text should be "green"

  Scenario: 'user selects' "Gold" (page object) option text inside select dropdown should get this option selected, 'text should be' should verify the text
    Given user goes to "test2-page"."pageTest2"
    When user selects "test2-page"."textGold" in "test2-page"."dropdownColors"
    Then "test2-page"."blockDropdownColor" text should be "test2-page"."textGold"

  Scenario: 'user selects' "Gold" (page object) option text inside select dropdown should get this option selected, 'text should be' should verify the text (text style step)
    Given user goes to "test2-page"."pageTest2"
    When user selects textGold from test2-page in dropdownColors from test2-page
    Then blockDropdownColor from test2-page text should be textGold from test2-page
