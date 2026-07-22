# playwright-cucumber-steps
Cucumber steps (step definitions) written with Playwright for end-to-end (e2e)
tests

[![Actions Status](https://github.com/Marketionist/playwright-cucumber-steps/workflows/Build%20and%20Test/badge.svg)](https://github.com/Marketionist/playwright-cucumber-steps/actions)
[![npm version](https://img.shields.io/npm/v/playwright-cucumber-steps.svg)](https://www.npmjs.com/package/playwright-cucumber-steps)
[![npm downloads](https://img.shields.io/npm/dw/playwright-cucumber-steps)](https://www.npmjs.com/package/playwright-cucumber-steps)
[![npm license](https://img.shields.io/npm/l/playwright-cucumber-steps.svg)](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/LICENSE)

## List of predefined steps
> Note: see all steps usage examples in:
> - [i-steps-test1.feature](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/tests/features/i-steps-test1.feature)
> - [i-steps-test2.feature](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/tests/features/i-steps-test2.feature)

> Note: if you are using TypeScript, don't forget to add PageModel interface to
> your page-objects:
> ```
> // tests/page-objects/my-page.ts
>
> interface PageModel {
>     [key: string]: any;
> }
>
> const myPage: PageModel = {
>     // ...
> };
>
> export default myPage;
> ```

### Given steps
1. `I/user go(es) to URL "..."` - open a site (by its URL provided in "" as a
string) in the current browser window/tab. For example:
    ```gherkin
    # my-test.feature

    Given I go to URL "https://github.com/Marketionist"
    ```
2. `I/user go(es) to "..."."..."` - open a site (by its URL provided in
**"page"."element"**) in the current browser window/tab. For example:
    ```gherkin
    # tests/features/my-account.feature

    Given I go to "my-page"."urlMyAccount"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        urlMyAccount: 'https://github.com/Marketionist',
        // ...
    };
    ```
- `I/user go(es) to ... from ...` - open a site (by its URL provided in
**element** from **page**) in the current browser window/tab. For example:
    ```gherkin
    # tests/features/my-account.feature

    Given I go to urlMyAccount from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        urlMyAccount: 'https://github.com/Marketionist',
        // ...
    };
    ```
3. `I/user send(s) "..." request to "..." with body "..."` - send request
(request method provided in "" as a string) to URL (provided in "" as a string)
with body (provided in "" as a string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://httpbin.org/post" with body "{ \"test1\": 1, \"test2\": 2 }"
    ```
- `I/user send(s) "..." request to "..." with body "..."."..."` - send request
(request method provided in "" as a string) to URL (provided in "" as a string)
with body (provided in **"page"."element"** as a JSON object or as a string with
a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://httpbin.org/post" with body "my-test-api-page"."bodyTestString"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
- `I/user send(s) "..." request to "..."."..." with body "..."."..."` - send
request (request method provided in "" as a string) to URL (provided in
**"page1"."element1"** as a string) with body (provided in
**"page2"."element2"** as a JSON object or as a string with a JSON object
inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "my-test-api-page"."urlTestRequest" with body "my-test-api-page"."bodyTestJson"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
- `I/user send(s) "..." request to ... from ... with body ... from ...` - send
request (request method provided in "" as a string) to URL (provided in
**element1** from **page1** as a string) with body (provided in **element2**
from **page2** as a JSON object or as a string with a JSON object inside). For
example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to urlTestRequest from my-test-api-page with body bodyTestString from my-test-api-page
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // ...
    };
    ```
4. `I/user send(s) "..." request to "..." with headers "..." and body "..."` -
send a request (request method provided in "" as a string) to URL (provided in
"" as a string) with headers (provided in "" as a string with a JSON object
inside) and body (provided in "" as a string with a JSON object inside). For
example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://httpbin.org/post" with headers "{ \"Content-Type\": \"application/json\", \"Authorization\": \"Bearer aBcD1234\" }" and body "{ \"test1\": 1, \"test2\": 2 }"
    ```
- `I/user send(s) "..." request to "..." with headers "..."."..." and body "..."."..."` -
send a request (request method provided in "" as a string) to URL (provided in
"" as a string) with headers (provided in **"page1"."element1"** as a JSON
object or as a string with a JSON object inside) and body (provided in
**"page2"."element2"** as a JSON object or as a string with a JSON object
inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://httpbin.org/post" with headers "my-test-api-page"."headersTestString" and body "my-test-api-page"."bodyTestString"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        headersTestString: '{"content-type":"application/json"}',
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        headersTestJson: { 'content-type': 'application/json', },
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
- `I/user send(s) "..." request to "..."."..." with headers "..."."..." and body "..."."..."` -
send a request (request method provided in "" as a string) to URL (provided
in **"page1"."element1"** as a string) with headers (provided
in **"page2"."element2"** as a JSON object or as a string with a JSON object
inside) and body (provided in **"page3"."element3"** as a JSON object or as a
string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "my-test-api-page"."urlTestRequest" with headers "my-test-api-page"."headersTestString" and body "my-test-api-page"."bodyTestString"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        urlTestRequest: 'http://httpbin.org/post',
        // ...
        headersTestString: '{"content-type":"application/json"}',
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        headersTestJson: { 'content-type': 'application/json', },
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
- `I/user send(s) "..." request to ... from ... with headers ... from ... and body ... from ...` -
send a request (request method provided in "" as a string) to URL (provided in
**element1** from **page1** as a string) with headers (provided in **element2**
from **page2** as a JSON object or as a string with a JSON object inside) and
body (provided in **element3** from **page3** as a JSON object or as a string
with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to urlTestRequest from my-test-api-page with headers headersTestString from my-test-api-page and body bodyTestString from my-test-api-page
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        urlTestRequest: 'http://httpbin.org/post',
        // ...
        headersTestString: '{"content-type":"application/json"}',
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        headersTestJson: { 'content-type': 'application/json', },
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
5. `I/user send(s) "..." request to "..." with body:` - send request
(request method provided in "" as a string) to URL (provided in "" as a string)
with body (provided in """""" as a doc string with a JSON object inside). For
example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://localhost:8001/post" with body:
    """
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "active": true
    }
    """
    ```
- `I/user send(s) "..." request to "..."."..." with body:` - send
request (request method provided in "" as a string) to URL (provided in
**"page"."element"** as a string) with body (provided in """""" as a doc string
with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "my-test-api-page"."urlTestRequest" with body:
    """
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "active": true
    }
    """
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        // ...
    };
    ```
- `I/user send(s) "..." request to ... from ... with body:` - send
request (request method provided in "" as a string) to URL (provided in
**element** from **page** as a string) with body (provided in """""" as a doc
string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to urlTestRequest from my-test-api-page with body:
    """
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "active": true
    }
    """
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        // ...
    };
    ```
6. `I/user send(s) "..." request to "..." with headers and body:` - send request
(request method provided in "" as a string) to URL (provided in "" as a string)
with headers and body (provided in """""" as a doc string with a JSON object
inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "http://localhost:8001/post" with headers and body:
    """
    {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer aBcD1234"
      },
      "body": {
        "username": "testuser",
        "email": "testuser@example.com",
        "active": true
      }
    }
    """
    ```
- `I/user send(s) "..." request to "..."."..." with headers and body:` - send
request (request method provided in "" as a string) to URL (provided in
**"page"."element"** as a string) with headers and body (provided in """""" as a
doc string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to "my-test-api-page"."urlTestRequest" with headers and body:
    """
    {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer aBcD1234"
      },
      "body": {
        "username": "testuser",
        "email": "testuser@example.com",
        "active": true
      }
    }
    """
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        // ...
    };
    ```
- `I/user send(s) "..." request to ... from ... with headers and body:` - send
request (request method provided in "" as a string) to URL (provided in
**element** from **page** as a string) with headers and body (provided in """"""
as a doc string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Given I send "POST" request to urlTestRequest from my-test-api-page with headers and body:
    """
    {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer aBcD1234"
      },
      "body": {
        "username": "testuser",
        "email": "testuser@example.com",
        "active": true
      }
    }
    """
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        urlTestRequest: 'http://httpbin.org/post',
        // ...
    };
    ```

### When steps
7. `I/user click(s) "..."."..."` - click on the element (provided in
**"page"."element"** as CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I click "my-page"."linkTest2Page"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `I/user click(s) ... from ...` - click on the element (provided in **element**
from **page** as CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I click linkTest2PageXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
8. `I/user right click(s) "..."."..."` - right click on the element (provided in
**"page"."element"** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I right click "my-page"."linkTest2Page"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `I/user right click(s) ... from ...` - right click on the element (provided in
**element** from **page** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I right click linkTest2PageXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
9. `I/user double click(s) "..."."..."` - double click on the element (provided
in **"page"."element"** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I double click "my-page"."linkTest2Page"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `I/user double click(s) ... from ...` - double click on the element (provided
in **element** from **page** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I double click linkTest2PageXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
10. `I/user click(s) "..."."..." if present` - click on the element (provided in
**"page"."element"** as a CSS or XPath selector) only if it is present on the
page. For example:
    ```gherkin
    # tests/features/my-account.feature

    When I click "my-page"."linkTest2Page" if present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `I/user click(s) ... from ... if present` - click on the element (provided in
**element** from **page** as a CSS or XPath selector) only if it is present on
the page. For example:
    ```gherkin
    # tests/features/my-account.feature

    When I click linkTest2PageXPath from my-page if present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
11. `I/user enter(s) "..." into "..."."..."` - enter the text (provided in "" as
a string) into the input field (provided in **"page"."object"** as a CSS or
XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I enter "Green" into "my-page"."inputColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
> Note: `enter` steps use Playwright's `fill` method (faster than `type` steps,
> but does not trigger per-key events). It acts as if the text was pasted into
> the field all at once, firing only an input and a change event at the end of
> the operation.
- `I/user enter(s) "..." into ... from ...` - enter the text (provided in "" as
a string) into the input field (provided in **object** from **page** as a CSS or
XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I enter "Green" into inputColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user enter(s) "..."."..." into "..."."..."` - enter the text (provided in
**"page1"."element1"** as a string) into the input field (provided in
**"page2"."element2"** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I enter "my-page"."textGold" into "my-page"."inputColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user enter(s) ... from ... into ... from ...` - enter the text (provided in
**element1** from **page1** as a string) into the input field (provided
in **element2** from **page2** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I enter textGold from my-page into inputColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
12. `I/user type(s) "..." into "..."."..."` - type the text (provided in "" as a
string) into the input field (provided in **"page"."object"** as a CSS or XPath
selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I type "Green" into "my-page"."inputColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
> Note: `type` steps use Playwright's `pressSequentially` method (slower than
> `enter` steps, but triggers per-key events like keydown, keypress/input, and
> keyup for each character in the text). In most cases, you should use `enter`
> steps instead. You only need to press keys one by one if there is special
> keyboard handling on the page.
- `I/user type(s) "..." into ... from ...` - type the text (provided in "" as a
string) into the input field (provided in **object** from **page** as a CSS or
XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I type "Green" into inputColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user type(s) "..."."..." into "..."."..."` - type the text (provided in
**"page1"."element1"** as a string) into the input field (provided in
**"page2"."element2"** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I type "my-page"."textGold" into "my-page"."inputColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user type(s) ... from ... into ... from ...` - type the text (provided in
**element1** from **page1** as a string) into the input field (provided
in **element2** from **page2** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I type textGold from my-page into inputColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
13. `I/user clear(s) "..."."..." and type(s) "..."` - clear the input field
(provided in **"page"."element"** as a CSS or XPath selector) and type the text
(provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I clear "my-page"."inputColors" and type "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user clear(s) ... from ... and type(s) "..."` - clear the input field
(provided in **element** from **page** as a CSS or XPath selector) and type the
text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I clear inputColorsXPath from my-page and type "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user clear(s) "..."."..." and type(s) "..."."..."` - clear the input field
(provided in **"page1"."element1"** as a CSS or XPath selector) and type the
text (provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I clear "my-page"."inputColors" and type "my-page"."textGold"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `I/user clear(s) ... from ... and type(s) ... from ...` - clear the input
field (provided in **element1** from **page1** as a CSS or XPath selector) and
type the text (provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    When I clear inputColorsXPath from my-page and type textGold from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
14. `I/user select(s) "..." in "..."."..."` - select the option (provided in ""
as a string) in the dropdown (provided in **"page"."element"** as a CSS or XPath
selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I select "Green" in "my-page"."dropdownColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        dropdownColors: '#dropdown-colors',
        // OR
        dropdownColorsXPath: '//*[@id="dropdown-colors"]',
        // ...
    };
    ```
- `I/user select(s) "..." in ... from ...` - select the option (provided in ""
as a string) in the dropdown (provided in **element** from **page** as a CSS or
XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I select "Green" in dropdownColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        dropdownColors: '#dropdown-colors',
        // OR
        dropdownColorsXPath: '//*[@id="dropdown-colors"]',
        // ...
    };
    ```
- `I/user select(s) "..."."..." in "..."."..."` - select the option (provided in
**"page1"."element1"** as a string) in the dropdown (provided in
**"page2"."element2"** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I select "my-page"."textGold" in "my-page"."dropdownColors"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        dropdownColors: '#dropdown-colors',
        // OR
        dropdownColorsXPath: '//*[@id="dropdown-colors"]',
        // ...
    };
    ```
- `I/user select(s) ... from ... in ... from ...` - select the option
(provided in **element1** from **page1** as a string) in the dropdown (provided
in **element2** from **page2** as a CSS or XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I select textGold from my-page in dropdownColorsXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        dropdownColors: '#dropdown-colors',
        // OR
        dropdownColorsXPath: '//*[@id="dropdown-colors"]',
        // ...
    };
    ```
15. `I/user move(s) to "..."."..."` - move the mouse pointer over the element
(hover with cursor an element provided in **"page"."object"** as CSS or XPath
selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I move to "my-page"."linkTest2Page"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `I/user move(s) to ... from ...` - move the mouse pointer over the element
(hover with cursor an element provided in **object** from **page** as CSS or
XPath selector). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I move to linkTest2PageXPath from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
16. `I/user reload(s) the page` - reload the current page. For example:
    ```gherkin
    # tests/features/my-account.feature

    When I reload the page
    ```
17. `I/user wait(s) for ... ms` - wait for a provided amount of time (in
milliseconds). For example:
    ```gherkin
    # tests/features/my-account.feature

    When I wait for 200 ms
    ```

### Then steps
18. `page title should be "..."` - verify that the title of the current browser
window/tab equals to the text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should be "Test1 Page"
    ```
- `page title should be "..."."..."` - verify that the title of the current
browser window/tab equals to the text (provided in **"page"."element"** as a
string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should be "my-page"."textTest1Page"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        textTest1Page: 'Test1 Page',
        // ...
    };
    ```
- `page title should be ... from ...` - verify that the title of the current
browser window/tab equals to the text (provided in **element** from **page** as
a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should be textTest1Page from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        textTest1Page: 'Test1 Page',
        // ...
    };
    ```
19. `page title should contain "..."` - verify that the title of the current
browser window/tab contains the text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should contain "st1 Pa"
    ```
- `page title should contain "..."."..."` - verify that the title of the current
browser window/tab contains the text (provided in **"page"."element"** as a
string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should contain "my-page"."textTest1PagePartial"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        textTest1PagePartial: 'st1 Pa',
        // ...
    };
    ```
- `page title should contain ... from ...` - verify that the title of the
current browser window/tab contains the text (provided in **element** from
**page** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page title should contain textTest1PagePartial from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        textTest1PagePartial: 'st1 Pa',
        // ...
    };
    ```
20. `"..."."..." should be present` - verify that the element (provided in
**"page"."element"** as a CSS or XPath selector) is present on the page. For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" should be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... should be present` - verify that the element (provided in
**element** from **page** as a CSS or XPath selector) is present on the page.
For example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page should be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
21. `... "..."."..." should be present` - verify that the number of the elements
(provided in **"page"."element"** as a CSS or XPath selector) are present on the
page. For example:
    ```gherkin
    # tests/features/my-account.feature

    Then 4 "my-page"."input" should be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        input: 'input',
        // OR
        inputXPath: '//input',
        // ...
    };
    ```
- `... ... from ... should be present` - verify that the number of the elements
(provided in **element** from **page** as a CSS or XPath selector) are present
on the page. For example:
    ```gherkin
    # tests/features/my-account.feature

    Then 4 inputXPath from my-page should be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        input: 'input',
        // OR
        inputXPath: '//input',
        // ...
    };
    ```
22. `"..."."..." should not be present` - verify that the element (provided in
**"page"."element"** as a CSS or XPath selector) is not present on the page. For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" should not be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... should not be present` - verify that the element (provided in
**element** from **page** as a CSS or XPath selector) is not present on the
page. For example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page should not be present
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
23. `"..."."..." text should be "..."` - verify that the text of the element
(provided in **"page"."element"** as a CSS or XPath selector) equals to the text
(provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."blockInputColor" text should be "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        blockInputColor: '#block-input-color',
        // OR
        blockInputColorXPath: '//*[@id="block-input-color"]',
        // ...
    };
    ```
- `... from ... text should be "..."` - verify that the text of the element
(provided in **element** from **page** as a CSS or XPath selector) equals to the
text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then blockInputColor from my-page text should be "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        blockInputColor: '#block-input-color',
        // OR
        blockInputColorXPath: '//*[@id="block-input-color"]',
        // ...
    };
    ```
- `"..."."..." text should be "..."."..."` - verify that the text of the element
(provided in **"page1"."element1"** as a CSS or XPath selector) equals to the
text (provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."blockInputColor" text should be "my-page"."textGold"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        blockInputColor: '#block-input-color',
        // OR
        blockInputColorXPath: '//*[@id="block-input-color"]',
        // ...
    };
    ```
- `... from ... text should be ... from ...` - verify that the text of the
element (provided in **element1** from **page1** as a CSS or XPath selector)
equals to the text (provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then blockInputColorXPath from my-page text should be textGold from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        blockInputColor: '#block-input-color',
        // OR
        blockInputColorXPath: '//*[@id="block-input-color"]',
        // ...
    };
    ```
24. `"..."."..." text should contain "..."` - verify that the text of the
element (provided in **"page"."element"** as a CSS or XPath selector) contains
the text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."blockMyProfile" text should contain "user profile"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        blockMyProfile: '#my-profile',
        // OR
        blockMyProfileXPath: '//*[@id="my-profile"]',
        // ...
    };
    ```
- `... from ... text should contain "..."` - verify that the text of the element
(provided in **element** from **page** as a CSS or XPath selector) contains the
text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then blockMyProfileXPath from my-page text should contain "user profile"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        blockMyProfile: '#my-profile',
        // OR
        blockMyProfileXPath: '//*[@id="my-profile"]',
        // ...
    };
    ```
- `"..."."..." text should contain "..."."..."` - verify that the text of the
element (provided in **"page1"."element1"** as a CSS or XPath selector) contains
the text (provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."blockMyProfile" text should contain "my-page"."textUserProfile"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textUserProfile: 'user profile',
        // ...
        blockMyProfile: '#my-profile',
        // OR
        blockMyProfileXPath: '//*[@id="my-profile"]',
        // ...
    };
    ```
- `... from ... text should contain ... from ...` - verify that the text of the
element (provided in **element1** from **page1** as a CSS or XPath selector)
contains the text (provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then blockMyProfileXPath from my-page text should contain textUserProfile from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textUserProfile: 'user profile',
        // ...
        blockMyProfile: '#my-profile',
        // OR
        blockMyProfileXPath: '//*[@id="my-profile"]',
        // ...
    };
    ```
25. `"..."."..." input should be "..."` - verify that the element (provided in
**"page"."element"** as a CSS or XPath selector) has the given input value
(provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."inputColors" input should be "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `... from ... input should be "..."` - verify that the element (provided in
**element** from **page** as a CSS or XPath selector) has the given input value
(provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then inputColorsXPath from my-page input should be "Green"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `"..."."..." input should be "..."."..."` - verify that the element (provided
in **"page1"."element1"** as a CSS or XPath selector) has the given input value
(provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."inputColors" input should be "my-page"."textGold"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `... from ... input should be ... from ...` - verify that the element
(provided in **element1** from **page1** as a CSS or XPath selector) has the
given input value (provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then inputColorsXPath from my-page input should be textGold from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textGold: 'Gold',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
26. `"..."."..." input should contain "..."` - verify that the element (provided
in **"page"."element"** as a CSS or XPath selector) contains the given input
value (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."inputColors" input should contain "een"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `... from ... input should contain "..."` - verify that the element (provided
in **element** from **page** as a CSS or XPath selector) contains the given
input value (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then inputColorsXPath from my-page input should contain "een"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `"..."."..." input should contain "..."."..."` - verify that the element
(provided in **"page1"."element1"** as a CSS or XPath selector) contains the
given input value (provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."inputColors" input should contain "my-page"."textPartGold"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textPartGold: 'old',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `... from ... input should contain ... from ...` - verify that the element
(provided in **element1** from **page1** as a CSS or XPath selector) contains
the given input value (provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then inputColorsXPath from my-page input should contain textPartGold from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        textPartGold: 'old',
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
27. `"..."."..." input length should be ...` - verify that the element (provided
in **"page"."element"** as a CSS or XPath selector) contains the input of the
given length (provided as a number). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."inputColors" input length should be 42
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
- `... from ... input length should be ...` - verify that the element (provided
in **element** from **page** as a CSS or XPath selector) contains the input of
the given length (provided as a number). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then inputColorsXPath from my-page input length should be 42
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        inputColors: '#input-colors',
        // OR
        inputColorsXPath: '//*[@id="input-colors"]',
        // ...
    };
    ```
28. `page URL should be "..."` - verify that the URL of the current page equals
to the text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should be "https://github.com/Marketionist"
    ```
- `page URL should be "..."."..."` - verify that the URL of the current page
equals to the text (provided in **"page"."element"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should be "my-page"."urlMyPage"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        urlMyPage: 'https://github.com/Marketionist',
        // ...
    };
    ```
- `page URL should be ... from ...` - verify that the URL of the current page
equals to the text (provided in **element** from **page** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should be urlMyPage from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        urlMyPage: 'https://github.com/Marketionist',
        // ...
    };
    ```
29. `page URL should contain "..."` - verify that the URL of the current page
contains the text (provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should contain "Marketionist"
    ```
- `page URL should contain "..."."..."` - verify that the URL of the current
page contains the text (provided in **"page"."element"** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should contain "my-page"."username"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        username: 'Marketionist',
        // ...
    };
    ```
- `page URL should contain ... from ...` - verify that the URL of the current
page contains the text (provided in **element** from **page** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then page URL should contain username from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        username: 'Marketionist',
        // ...
    };
    ```
30. `"..."."..." attribute "..." should contain "..."` - verify that the element (provided
in **"page"."element"** as a CSS or XPath selector) contains the given attribute
value (attribute provided in "" as a string, value provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" attribute "href" should contain "test2.html"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... attribute "..." should contain "..."` - verify that the element (provided
in **element** from **page** as a CSS or XPath selector) contains the given attribute
value (attribute provided in "" as a string, value provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page attribute "href" should contain "test2.html"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `"..."."..." attribute "..." should contain "..."."..."` - verify that the element
(provided in **"page1"."element1"** as a CSS or XPath selector) contains the
given attribute value (attribute provided in "" as a string, value provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" attribute "href" should contain "my-page"."urlTest2"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        urlTest2: 'http://localhost:8001/test2.html',
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... attribute "..." should contain ... from ...` - verify that the element
(provided in **element1** from **page1** as a CSS or XPath selector) contains
the given attribute value (attribute provided in "" as a string, value provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page attribute "href" should contain urlTest2 from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        urlTest2: 'http://localhost:8001/test2.html',
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
31. `"..."."..." attribute "..." should not contain "..."` - verify that the element (provided
in **"page"."element"** as a CSS or XPath selector) does not contain the given attribute
value (attribute provided in "" as a string, value provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" attribute "href" should not contain "test3.html"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... attribute "..." should not contain "..."` - verify that the element (provided
in **element** from **page** as a CSS or XPath selector) does not contain the given attribute
value (attribute provided in "" as a string, value provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page attribute "href" should not contain "test3.html"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `"..."."..." attribute "..." should not contain "..."."..."` - verify that the element
(provided in **"page1"."element1"** as a CSS or XPath selector) does not contain the
given attribute value (attribute provided in "" as a string, value provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."linkTest2Page" attribute "href" should not contain "my-page"."urlTest3"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        urlTest3: 'http://localhost:8001/test3.html',
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
- `... from ... attribute "..." should not contain ... from ...` - verify that the element
(provided in **element1** from **page1** as a CSS or XPath selector) does not contain
the given attribute value (attribute provided in "" as a string, value provided in **element2** from **page2** as a string). For
example:
    ```gherkin
    # tests/features/my-account.feature

    Then linkTest2PageXPath from my-page attribute "href" should not contain urlTest3 from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        urlTest3: 'http://localhost:8001/test3.html',
        // ...
        linkTest2Page: '#link-test2-page',
        // OR
        linkTest2PageXPath: '//*[@id="link-test2-page"]',
        // ...
    };
    ```
32. `"..."."..." CSS property "..." should contain "..."` - verify that the element
(provided in **"page"."element"** as a CSS or XPath selector) has the given CSS
property value (property provided in "" as a string, value provided in "" as a
string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."titleTest1" CSS property "display" should contain "block"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `... from ... CSS property "..." should contain "..."` - verify that the element
(provided in **element** from **page** as a CSS or XPath selector) has the given
CSS property value (property provided in "" as a string, value provided in ""
as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then titleTest1 from my-page CSS property "display" should contain "block"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `"..."."..." CSS property "..." should contain "..."."..."` - verify that the
element (provided in **"page1"."element1"** as a CSS or XPath selector) has the
given CSS property value (property provided in "" as a string, value provided in
**"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."titleTest1" CSS property "display" should contain "my-page"."cssValueBlock"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        cssValueBlock: 'block',
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `... from ... CSS property "..." should contain ... from ...` - verify that the
element (provided in **element1** from **page1** as a CSS or XPath selector) has
the given CSS property value (property provided in "" as a string, value provided
in **element2** from **page2** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then titleTest1 from my-page CSS property "display" should contain cssValueBlock from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        cssValueBlock: 'block',
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
33. `"..."."..." CSS property "..." should not contain "..."` - verify that the
element (provided in **"page"."element"** as a CSS or XPath selector) does not
have the given CSS property value (property provided in "" as a string, value
provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."titleTest1" CSS property "display" should not contain "inline"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `... from ... CSS property "..." should not contain "..."` - verify that the
element (provided in **element** from **page** as a CSS or XPath selector) does
not have the given CSS property value (property provided in "" as a string, value
provided in "" as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then titleTest1 from my-page CSS property "display" should not contain "inline"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `"..."."..." CSS property "..." should not contain "..."."..."` - verify that
the element (provided in **"page1"."element1"** as a CSS or XPath selector) does
not have the given CSS property value (property provided in "" as a string, value
provided in **"page2"."element2"** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then "my-page"."titleTest1" CSS property "display" should not contain "my-page"."cssValueInline"
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        cssValueInline: 'inline',
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
- `... from ... CSS property "..." should not contain ... from ...` - verify that
the element (provided in **element1** from **page1** as a CSS or XPath selector)
does not have the given CSS property value (property provided in "" as a string,
value provided in **element2** from **page2** as a string). For example:
    ```gherkin
    # tests/features/my-account.feature

    Then titleTest1 from my-page CSS property "display" should not contain cssValueInline from my-page
    ```
    ```typescript
    // tests/page-objects/my-page.ts

    const myPage = {
        cssValueInline: 'inline',
        // ...
        titleTest1: 'h1',
        // OR
        titleTest1XPath: '//h1',
        // ...
    };
    ```
34. `response status code should be ...` - verify that the response status code
equals to a provided number. For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response status code should be 200
    ```
34. `response body should contain "..."` - verify that the response body
contains the property (provided in "" as a string with a JSON object inside).
For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response body should contain "{\"test1\":1,\"test2\":2}"
    ```
- `response body should contain "..."."..."` - verify that the response body
contains the property (provided in **"page"."element"** as a JSON object or as a
string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response body should contain "my-test-api-page"."bodyTestString"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
- `response body should contain ... from ...` - verify that the response body
contains the property (provided in **element** from **page** as a JSON object or
as a string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response body should contain bodyTestJson from my-test-api-page
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
        // OR
        bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
        // ...
    };
    ```
35. `response headers should contain "..."` - verify that the response headers
contain the property (provided in "" as a string with a JSON object inside). For
example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response headers should contain "{\"content-type\":\"application/json\"}"
    ```
- `response headers should contain "..."."..."` - verify that the response
headers contain the property (provided in **"page"."element"** as a JSON object
or as a string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response headers should contain "my-test-api-page"."headersTestString"
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        headersTestString: '{"content-type":"application/json"}',
        // OR
        headersTestJson: { 'content-type': 'application/json', },
        // ...
    };
    ```
- `response headers should contain ... from ...` - verify that the response
headers contain the property (provided in **element** from **page** as a JSON
object or as a string with a JSON object inside). For example:
    ```gherkin
    # tests/features/my-test-api.feature

    Then response headers should contain headersTestJson from my-test-api-page
    ```
    ```typescript
    // tests/page-objects/my-test-api-page.ts

    const myTestApiPage = {
        // ...
        headersTestString: '{"content-type":"application/json"}',
        // OR
        headersTestJson: { 'content-type': 'application/json', },
        // ...
    };
    ```

## Requirements
<table>
    <thead>
        <tr>
            <th><a href="https://nodejs.org/" rel="nofollow" target="_blank">Node.js</a></th>
            <th><a href="https://github.com/microsoft/playwright" rel="nofollow" target="_blank">Playwright</a></th>
            <th><a href="https://github.com/vitalets/playwright-bdd" rel="nofollow" target="_blank">Playwright-BDD</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>>=22.3.x</td>
            <td>>=1.57.0</td>
            <td>>=8.4.2</td>
        </tr>
    </tbody>
</table>

## Installation
> Note: this package is lightweight and has only 2 peerDependencies - it uses:
> - [\@playwright/test](https://github.com/microsoft/playwright) to execute steps.
> - [playwright-bdd](https://github.com/vitalets/playwright-bdd) to parse step definitions.

1. If you do not have `package.json` in the root folder of your project you will
need to create it:
```bash
npm init --init-type=module --yes
```

2. To install the playwright-cucumber-steps package and its peerDependencies and
to save it to your `package.json` just run:
```bash
npm install @playwright/test@1.61.1 playwright-bdd@9.2.0 --save-exact --save-dev && npm install playwright-cucumber-steps --save-dev
```

3. Specify the pathes to all step definitions inside the array in the `steps`
property of the `playwright.config.ts` configuration file in the root directory
of your project:
```typescript
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'tests/features/*.feature',
    steps: [
        'node_modules/playwright-cucumber-steps/dist/index.js',
        'node_modules/playwright-cucumber-steps/dist/fixtures.js',
        'tests/**/*.ts'
    ],
});

export default defineConfig({
    // Look for test files in the directory, relative to this configuration file
    testDir,
    timeout: 30000,
    workers: 8,
    fullyParallel: true,
    retries: 0,
    reporter: [['html', { open: 'never' }]],
    use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: true,
        viewport: { width: 1920, height: 1080, },
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on',
        video: 'on-first-retry',
    },
});
```
4. Launch the tests with:
```bash
npx bddgen && npx playwright test
```
OR if you use custom Page Objects folder (not `tests/page-objects`):
```bash
PO_FOLDER_PATH="tests/my-custom-page-objects" npx bddgen && PO_FOLDER_PATH="tests/my-custom-page-objects" npx playwright test
```

You can import `Given`, `When`, `Then` into your custom Cucumber step
definitions file like this:
```typescript
import { Given, When, Then } from 'playwright-cucumber-steps';
```

Also you can access Page Objects like this:
```typescript
import { pageObjects } from 'playwright-cucumber-steps';
```

## Contributing
Please feel free to contribute to this repository - see
[CONTRIBUTING.md](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/CONTRIBUTING.md)
to help you get started. It is not set in stone, so you can just create a pull
request and we will help you refine it along the way.

## Thanks
If this package was helpful to you - please give this repository a **★ Star** on
[GitHub](https://github.com/Marketionist/playwright-cucumber-steps).
