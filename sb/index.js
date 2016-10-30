import React from 'react';
import ReactDOM from 'react-dom';
import '../src/helper';

if (module.hot) {
    module.hot.accept();
    window.parent.sb && window.parent.sb.contact();
}

// Remove this demo component
import { Welcome } from './welcome/welcome';

// Import your app here and SB will load it
// For more details see docs here https://github.com/ui-storybook/sb