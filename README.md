# SB React helper

React helper that allow load and develop React apps with [SB](https://github.com/ui-storybook/sb)

### Getting started
Fastest way to add SB to your project is to use [sb-cli](https://github.com/ui-storybook/sb-cli):  

```bash
# Installation
npm i -g sb-cli

# Then in your project folder run  
sb-create
```

#### React usage
First you need to import your React components in `sb/index.js` file  

```js
// Example from demo application  
import { Welcome } from './welcome/welcome';
```

The write your stories  
SB provides simple api for you:

```js
// File sb/stories/index.js

// You need import your commponent here too
import { Welcome } from './../welcome/welcome';

// Create a new section (like page)
let overview = sb.section('Welcome section');

// Then you can add new story and states to section
// add method create new state for story 
// first param take title of state
// second take function that return Raact component 
overview.story('SB demo component')
  .add('Hello messages', () => (<Welcome />));
``` 

Than simply run `npm run sb` — this will load server with hotreload and run SB with your application.  

For more information visit [SB](https://github.com/ui-storybook/sb)