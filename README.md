# playwright-cucumber-steps
Cucumber steps (step definitions) written with Playwright for end-to-end (e2e) tests

[![Actions Status](https://github.com/Marketionist/playwright-cucumber-steps/workflows/Build%20and%20Test/badge.svg)](https://github.com/Marketionist/playwright-cucumber-steps/actions)
[![npm version](https://img.shields.io/npm/v/playwright-cucumber-steps.svg)](https://www.npmjs.com/package/playwright-cucumber-steps)
[![NPM License](https://img.shields.io/npm/l/playwright-cucumber-steps.svg)](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/LICENSE)

## Supported versions
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

## List of predefined steps
### Given steps
1. `I/user go(es) to URL "..."` - open a site (by its URL provided in "" as a
string - for example: `"https://github.com/Marketionist"`) in the current
browser window/tab.
2. `I/user go(es) to "..."."..."` - open a site (by its URL provided in
**"page"."element"**) in the current browser window/tab.
- `I/user go(es) to ... from ...` - open a site (by its URL provided in
**element** from **page**) in the current browser window/tab.

### When steps
3. `I/user click(s) "..."."..."` - click on the element (provided in
**"page"."element"** as CSS or XPath selector).
- `I/user click(s) ... from ...` - click on the element (provided in **element**
from **page** as CSS or XPath selector).
4. `I/user right click(s) "..."."..."` - right click on the element (provided in
**"page"."element"** as a CSS or XPath selector).
- `I/user right click(s) ... from ...` - right click on the element (provided in
**element** from **page** as a CSS or XPath selector).
5. `I/user double click(s) "..."."..."` - double click on the element (provided
in **"page"."element"** as a CSS or XPath selector).
- `I/user double click(s) ... from ...` - double click on the element (provided
in **element** from **page** as a CSS or XPath selector).
6. `I/user click(s) "..."."..." if present` - click on the element (provided in
**"page"."element"** as a CSS or XPath selector) only if it is present on the
page.
- `I/user click(s) ... from ... if present` - click on the element (provided in
**element** from **page** as a CSS or XPath selector) only if it is present on
the page.
7. `I/user type(s) "..." into "..."."..."` - type the text (provided in "" as a
string) into the input field (provided in **"page"."object"** as a CSS or XPath
selector).
- `I/user type(s) "..." into ... from ...` - type the text (provided in "" as a
string) into the input field (provided in **object** from **page** as a CSS or
XPath selector).
- `I/user type(s) "..."."..." into "..."."..."` - type the text (provided in
**"page1"."element1"** as a string) into the input field (provided in
**"page2"."element2"** as a CSS or XPath selector).
- `I/user type(s) ... from ... into ... from ...` - type the text (provided in
**element1** from **page1** as a string) into the input field (provided in **element2** from **page2** as a CSS or XPath selector).
8. `I/user select(s) "..." in "..."."..."` - select the option (provided in ""
as a string) in the dropdown (provided in **"page"."element"** as a CSS or XPath
selector).
- `I/user select(s) "..." in ... from ...` - select the option (provided in ""
as a string) in the dropdown (provided in **element** from **page** as a CSS or
XPath selector).
- `I/user select(s) "..."."..." in "..."."..."` - select the option (provided in
**"page1"."element1"** as a string) in the dropdown (provided in
**"page2"."element2"** as a CSS or XPath selector).
- `I/user select(s) ... from ... in ... from ...` - select the option
(provided in **element1** from **page1** as a string) in the dropdown (provided
in **element2** from **page2** as a CSS or XPath selector).
9. `I/user reload(s) the page` - reload current page.
10. `I/user wait(s) for ... ms` - wait for a provided amount of time (in
milliseconds).

### Then steps
11. `page title should be "..."` - verify that the title of the current browser
window/tab equals to the text (provided in "" as a string).
12. `page title should contain "..."` - verify that the title of the current
browser window/tab contains the text (provided in "" as a string).
13. `"..."."..." should be present` - verify that the element (provided in
**"page"."element"** as a CSS or XPath selector) is present on the page.
- `... from ... should be present` - verify that the element (provided in
**element** from **page** as a CSS or XPath selector) is present on the page.
14. `... "..."."..." should be present` - verify that the number of the elements
(provided in **"page"."element"** as a CSS or XPath selector) are present on the
page.
- `... ... from ... should be present` - verify that the number of the elements
(provided in **element** from **page** as a CSS or XPath selector) are present
on the page.
15. `"..."."..." should not be present` - verify that the element (provided in
**"page"."element"** as a CSS or XPath selector) is not present on the page.
- `... from ... should not be present` - verify that the element (provided in
**element** from **page** as a CSS or XPath selector) is not present on the
page.
16. `"..."."..." text should be "..."` - verify that the text of the element
(provided in **"page"."element"** as a CSS or XPath selector) equals to the text
(provided in "" as a string).
- `... from ... text should be "..."` - verify that the text of the element
(provided in **element** from **page** as a CSS or XPath selector) equals to the
text (provided in "" as a string).
- `"..."."..." text should be "..."."..."` - verify that the text of the element
(provided in **"page1"."element1"** as a CSS or XPath selector) equals to the
text (provided in **"page2"."element2"** as a string).
- `... from ... text should be ... from ...` - verify that the text of the
element (provided in **element1** from **page1** as a CSS or XPath selector)
equals to the text (provided in **element2** from **page2** as a string).

## Contributing
You are welcome to contribute to this repository - please see
[CONTRIBUTING.md](https://github.com/Marketionist/playwright-cucumber-steps/blob/main/CONTRIBUTING.md)
to help you get started. It is not set in stone, so you can just create a pull
request and we will help you refine it along the way.

## Thanks
If this package was helpful to you - please give this repository a **★ Star** on
[GitHub](https://github.com/Marketionist/playwright-cucumber-steps).
