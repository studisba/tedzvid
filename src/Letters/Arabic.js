import React from 'react';
const reactStringReplace = require('react-string-replace');

function Arabic (props) {
    const arabicTxt = props.children;

    const replacedTxt = reactStringReplace(arabicTxt, props.arabic, (match, i) => (
        <span style={{ color: 'red' }}>{match}</span>
    ));

    console.log(replacedTxt)

    return <span dir='rtl'
                lang='ar'
                className={ props.bold ? "arap-red" : "arapski" }
            >

        { props.arabic ? replacedTxt : props.children }

    </span>
}

export default Arabic;