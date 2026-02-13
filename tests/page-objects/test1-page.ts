// #############################################################################

import { PageModel } from './PageModelInterface.ts';

const test1Page: PageModel = {

    pageTest1: 'http://localhost:8001/test1.html',
    linkTest2Page: '#link-test2-page',
    linkTest2PageXPath: '//*[@id="link-test2-page"]',
    buttonMenuRightClick: '#button-menu-right-click',
    buttonMenuRightClickXPath: '//*[@id="button-menu-right-click"]',
    blockMenu: '#block-menu',
    linkInvisibleTest2Page: '#link-invisible-test2-page',
    linkInvisibleTest2PageXPath: '//*[@id="link-invisible-test2-page"]',
    textErrorXPath: `//*[ancestor::*[@class="todo-container" and
        descendant::*[text()="New"]] and @type="checkbox"]`,

};

export default test1Page;
