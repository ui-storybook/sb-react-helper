import React from 'react';
import 'ui-storybook/sb';
import 'ui-storybook/stories';

if (module.hot) {
    module.hot.accept();
    window.sb.reload();
}

import { Welcome } from './../welcome/welcome';

// Write your stories here
let overview = sb.section('Welcome section');
overview.story('SB demo component')
  .add('Hello messages', () => (<Welcome />));