// #############################################################################

import { PageModel } from './PageModelInterface.ts';

const test2Page: PageModel = {

    protocol: 'http://',
    textGold: 'Gold',
    textIndigo: 'Indigo',
    dropdownColors: '#dropdown-colors',
    blockDropdownColor: '#block-dropdown-color',
    inputColors: '#input-colors',
    blockInputColor: '#block-input-color',
    input: 'input',
    urlTest1: 'http://localhost:8001/test1.html',
    pathTest1: '/test1.html',

};

test2Page.pageTest2 = `${test2Page.protocol}localhost:8001/test2.html`;

export default test2Page;
