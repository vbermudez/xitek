'use strict';

/**
 * Header.
 * 
 * @class
 */
export class XiTekFooter extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});
        
        shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    order: 2;
                    font-size: 8pt;
                    position: fixed;
                    bottom: 0px;
                    margin-left: 20px;
                    margin-bottom: 5px;
                }
            </style>
            Copyright &copy; 2018 <a href="/"><strong>XiTek, TDF, SL</strong></a>.
        `;
        this._logoElement = shadowRoot.querySelector('.logo');
    }

    /**
     * Fires when an instance of the element is created.
     * 
     * @event
     */
    createdCallback() {
        
    }

    /**
     * Fires when the element is inserted into the DOM.
     * 
     * @event
     */
    connectedCallback() {
        
    }

    /**
     * Fires when the element is removed from the DOM.
     * 
     * @event
     */
    disconnectedCallback() {

    }

    /**
     * Fires when an attribute of the element is added, removed, updated, or replaced.
     * 
     * @event
     */
    attributeChangedCallback() {

    }

}

customElements.define('xt-footer', XiTekFooter);