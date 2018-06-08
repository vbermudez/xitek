'use strict';

/**
 * Header.
 * 
 * @class
 */
export class XiTekHeader extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});
        
        shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    order: 0;
                    align-content: center;
                    align-items: center;
                    align-self: center;
                    background-color: ghostwhite;
                    margin: auto;
                    width: 99%;
                    box-shadow: 1px 1px 20px 1px black;
                }

                :host > h1 {
                    display: block;
                    text-align: center;
                    margin-bottom: -5px;
                    font-size: 24pt;
                }

                :host > h4 {
                    display: block;
                    text-align: center;
                    margin-top: -5px;
                    font-size: 14pt;
                }

                .logo {
                    align-self: center;
                    align-items: center;
                    align-content: center;
                    text-align: center;
                }
                
                .logo img {
                    width: 128px;
                }
            </style>
            <h1>Xi Ξ Tek</h1>
            <div class="logo">
                <img src="icons/logo.svg" alt="Logotipo XiTek, TDF, SL">
            </div>
            <h4>Tecnología, Diseño y Formación</h4>
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

customElements.define('xt-header', XiTekHeader);