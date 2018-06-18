import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `first-study`
 * first time study polymer element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FirstStudy extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'first-study',
      },
    };
  }
}

window.customElements.define('first-study', FirstStudy);
