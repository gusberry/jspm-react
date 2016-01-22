import React from 'react'
import ReactDOM from 'react-dom'
import ReactIntl, { IntlProvider } from 'react-intl'
import TF from 'truefalse-item-builder'
// console.log(TF);
window.ReactIntl = ReactIntl
console.log(IntlProvider);

ReactDOM.render((
    // <div>test</div>
    // <IntlProvider>
         <TF />
    // </IntlProvider>
), document.getElementById('app'))
