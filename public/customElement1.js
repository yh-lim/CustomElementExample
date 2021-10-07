export default class CustomElementTest1 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('**a');
    }
}

customElements.define('custom-element-test1', CustomElementTest1);