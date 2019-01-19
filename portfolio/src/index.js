import React from 'react';
import ReactDOM from 'react-dom';
import Site from './components/Site.js';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import WebFont from 'webfontloader';
import './custom.css';

WebFont.load({
    google: {
        families: ['Montserrat', 'Cutive Mono', 'sans-serif']
    }
});

ReactDOM.render(<Site />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
