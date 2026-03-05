// #############################################################################

import { PageModel } from './PageModelInterface';

const test1Page: PageModel = {

    urlTest1: 'http://localhost:8001/test1.html',
    linkTest2Page: '#link-test2-page',
    linkTest2PageXPath: '//*[@id="link-test2-page"]',
    buttonMenuRightClick: '#button-menu-right-click',
    buttonMenuRightClickXPath: '//*[@id="button-menu-right-click"]',
    blockMenu: '#block-menu',
    linkInvisibleTest2Page: '#link-invisible-test2-page',
    linkInvisibleTest2PageXPath: '//*[@id="link-invisible-test2-page"]',
    textErrorXPath: `//*[ancestor::*[@class="todo-container" and
        descendant::*[text()="New"]] and @type="checkbox"]`,
    titleTest1: 'h1',
    blockTextTest: '#text-test',
    txtTest1: 'Test 1 sample',
    txtTest2: 'Test2',

};

export default test1Page;
