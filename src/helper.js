import * as React from 'react';
import ReactDOM from 'react-dom';

const events = {
    'component': loadComponent
};

const preview = document.getElementById('preview-helper');

// Register lissener for render new component
window.addEventListener('message', event => {
    event.data && events[event.data.type].call(this, event.data.data);
}, false);

function loadComponent(entity) {

    let component = window.parent.sb.getStory(entity);

    if (component) {
        renderComponent(component.template);
    } else {
        setTimeout(() => loadComponent(entity), 0);
    }
}

function renderComponent(component) {
    try {
        ReactDOM.render(component(), preview);
    } catch (e) {
        console.log(e);
        showErrorCompoennt();
    }
}

function showErrorCompoennt() {
    const PreviewUnavailable = msg => React.createElement(
        "div",
        null,
        "Preview Unavailable! Seems like you are not returning a correct React element form the story."
    );

    const previewUnavailable = React.createElement(PreviewUnavailable, null);
    ReactDOM.render(previewUnavailable, preview);
}

// If loaded in iFrame
// Tell about it to SB
window.parent.sb && window.parent.sb.contact();