import {configure} from '@storybook/vue';
// import {withKnobs} from '@storybook/addon-knobs';

// Addon withInfo not working globally

// addDecorator(withKnobs);

// @see https://webpack.js.org/guides/dependency-management/#requirecontext
// we check full path to file
const req = require.context('../../src', true, /\/stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
