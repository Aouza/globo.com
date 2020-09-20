import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body{
        height: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    button, input{
        border: 0;
        outline: none;
        background: none;
    }

    a{
        text-decoration: none;
    }
    

    :root{
        --color-red-content: #CD150C;
        --color-green-content: #06AA48;
        --color-orange-content: #FF8100;
        --color-dark-red: #A80000;
        --color-dark-green: #06AA48;
        --color-dark-orange: #FF7F00;
        --color-dark-gray: #666666;
        --color-dark-blue: #0669DE;
        --color-border: hsla(0,0%,51%,.2);
        --color-white-text: #ffffff;
        --color-gray-text: #777777;
        --color-dot: #909090;
        --color-field-border: #CCCCCC;
    }
`;