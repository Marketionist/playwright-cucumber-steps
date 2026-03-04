@fast @user-steps @part2

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

  Scenario: 'user sends "POST" request' should return the content of the page, 'response status code should be' (body provided in the step string)
    Given user sends "POST" request to "http://localhost:8001/post" with body "{ \"test1\": 1, \"test2\": 2 }"
    Then response status code should be 200

  Scenario: 'user sends "GET" request' should return the content of the page, 'response status code should be' (empty body provided in the step string)
    Given user sends "GET" request to "http://localhost:8001/" with body ""
    Then response status code should be 200

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' with body as a string (Page Object style step)
    Given user sends "POST" request to "http://localhost:8001/post" with body "test2-page"."bodyTestString"
    Then response body should contain "test2-page"."bodyTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' with body as a JSON object (full Page Object style step)
    Given user sends "POST" request to "test2-page"."urlTestRequest" with body "test2-page"."bodyTestJson"
    Then response body should contain "test2-page"."bodyTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (full text style step)
    Given user sends "POST" request to urlTestRequest from test2-page with body bodyTestString from test2-page
    Then response body should contain bodyTestString from test2-page

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (headers, body provided in the step string)
    Given user sends "POST" request to "http://localhost:8001/post" with headers "{ \"Content-Type\": \"application/json\", \"Authorization\": \"Bearer aBcD1234\" }" and body "{ \"test1\": 1, \"test2\": 2 }"
   Then response body should contain "{\"test1\":1,\"test2\":2}"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (empty headers, body provided in the step string)
    Given user sends "POST" request to "http://localhost:8001/post" with headers "" and body "{ \"test1\": 1, \"test2\": 2 }"
    Then response body should contain "{\"test1\":1,\"test2\":2}"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (Page Object style step with headers and body)
    Given user sends "POST" request to "http://localhost:8001/post" with headers "test2-page"."headersTestString" and body "test2-page"."bodyTestString"
    Then response body should contain "test2-page"."bodyTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (full Page Object style step with headers and body)
    Given user sends "POST" request to "test2-page"."urlTestRequest" with headers "test2-page"."headersTestString" and body "test2-page"."bodyTestJson"
    Then response body should contain "test2-page"."bodyTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (full text style step with headers and body)
    Given user sends "POST" request to urlTestRequest from test2-page with headers headersTestString from test2-page and body bodyTestString from test2-page
    Then response body should contain bodyTestString from test2-page

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (body provided in the step doc string)
    Given user sends "POST" request to "http://localhost:8001/post" with body:
    """
    {
      "test1": 1,
      "test2": 2
    }
    """
    Then response body should contain "{\"test1\":1,\"test2\":2}"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (full Page Object style step, body provided in the step doc string)
    Given user sends "POST" request to "test2-page"."urlTestRequest" with body:
    """
    {"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}
    """
    Then response body should contain "test2-page"."bodyTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response body should contain' (full text style step, body provided in the step doc string)
    Given user sends "POST" request to urlTestRequest from test2-page with body:
    """
    {
      "items": 3,
      "item1": "nice",
      "item2": true,
      "item3": [1, 2, 3]
    }
    """
    Then response body should contain bodyTestString from test2-page

  Scenario: 'user sends "POST" request' should return the content of the page, 'response headers should contain' (headers and body provided in the step doc string)
    Given user sends "POST" request to "http://localhost:8001/post" with headers and body:
    """
    {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer aBcD1234_1"
      },
      "body": {
        "test1": 1,
        "test2": 2
      }
    }
    """
    Then response headers should contain "{\"content-type\":\"application/json\"}"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response headers should contain' (full Page Object style step, headers and body provided in the step doc string)
    Given user sends "POST" request to "test2-page"."urlTestRequest" with headers and body:
    """
    {
      "headers": {"Content-Type":"application/json","Authorization":"Bearer EfGh2345"},
      "body": {"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}
    }
    """
    Then response headers should contain "test2-page"."headersTestString"

  Scenario: 'user sends "POST" request' should return the content of the page, 'response headers should contain' (full text style step, headers and body provided in the step doc string)
    Given user sends "POST" request to urlTestRequest from test2-page with headers and body:
    """
    {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer EfGh2345"
      },
      "body": {
        "items": 3,
        "item1": "nice",
        "item2": true,
        "item3": [1, 2, 3]
      }
    }
    """
    Then response headers should contain headersTestJson from test2-page
