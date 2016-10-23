import React from 'react';
import ReactDOM from 'react-dom';

const events = {
    'component': loadComponent
};

const preview = document.getElementById('preview-helper');

// Register lissener for render new component
window.addEventListener('message', event => {
    event.data && events[event.data.type].call(this, event.data.data);
}, false);

function loadComponent(component) {

    if (typeof component.template !== 'function') {
        return showErrorCompoennt();
    }

    try {
        ReactDOM.render(component.template, preview);
    } catch (e) {
        console.log(e);
        showErrorCompoennt();
    }


    return null;
}

function showErrorCompoennt() {
    const PreviewUnavailable = msg => (
        <div>
            <p>Preview Unavailable!</p>
            <p>Seems like you are not returning a correct React element form the story.</p>
            <p>Could you double check that?</p>
        </div>
    );

    const previewUnavailable = (<PreviewUnavailable />);
    ReactDOM.render(previewUnavailable, preview);
}

// If loaded in iFrame
// Tell about it to SB
window.parent.sb && window.parent.sb.contact();

