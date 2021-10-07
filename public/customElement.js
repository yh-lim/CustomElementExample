export default class CustomElementTest extends HTMLDivElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('!!');
    }
    
    customFunciton() {
        console.log("Hello CustomElement");

        el = document.createElement('div');
        this.appendChild(el);
    }

}

customElements.define('custom-element-test', CustomElementTest, { extends: 'div' });