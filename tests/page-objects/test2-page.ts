// #############################################################################

import { PageModel } from './PageModelInterface';

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
    bodyTestString: '{"items":3,"item1":"nice","item2":true,"item3":[1,2,3]}',
    bodyTestJson: { items: 3, item1: 'nice', item2: true, item3: [1, 2, 3,], },
    headersTestString: '{"content-type":"application/json"}',
    headersTestJson: { 'content-type': 'application/json', },
    urlTestRequest: 'http://localhost:8001/post',

};

test2Page.urlTest2 = `${test2Page.protocol}localhost:8001/test2.html`;

export default test2Page;
