import { createGlobalStyle } from "styled-components";

import MonsRegUrl from "../resources/fonts/Montserrat-Regular.ttf";
import MonsBoldUrl from "../resources/fonts/Montserrat-Bold.ttf";

const GlobalStyles = createGlobalStyle`
:root {
    --primary: #38c9d9;
    --secondary : #3e77aa;
    --gray: #a6a6a6;
    --red: #ff2f37;
    --darken-red: #e62028;
    --light-gray: #a0a0a0;
    --gray-text: #7d7d7d;
}

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    vertical-align: baseline;
    }
    

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;

}


body {
    line-height: 1;

}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
	content: '';
    content: none;
}

table {
	border-collapse: collapse;
    border-spacing: 0;
}

a {
    text-decoration: none;
    color: black;
}


@keyframes fadein {
    from {opacity: 0}
        
    to  { opacity: 1}  
}


@keyframes upAndDown {
    0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }

}

@font-face {
    font-family: 'mont-reg';
    src: url(${MonsRegUrl}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'mont-bold';
    src: url(${MonsBoldUrl}) format('truetype');
    font-weight: bold;
    font-style: normal;
}




html, body {
    height: 100%;
    overflow-x: hidden;
    font-family: 'mont-reg';
    font-size: 16px;
    box-sizing: border-box;
    min-width: 320px
}

*, *::before, *::after {
        box-sizing: inherit
    }

#root {
    height: 100%;
}

.container {
    width: 1140px;
    margin: 0 auto;
    position: relative;
}

.flex {
    display: flex;
    justify-content: space-between;
}




`;

export default GlobalStyles;
