/**
 * Copyright 2025 milestudor
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-screen";
  }
  
  constructor() {
    super();
    this.title="";
    this.pagenumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        background-color: var(--portfolio-screen-background, var(--ddd-theme-accent));
        min-height: 100vh;
        display: block;
        padding-top: 60px;
        box-sizing: border-box;
      }
      .page-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 50px 20px 20px;
        background-image: linear-gradient(
            to right,
            rgba(122, 43, 73, 0),
            rgba(40, 0, 100, 0.264),
            rgb(84, 43, 122)
        );
      }
      h1
      {
        margin: 0;
        font-family: var(--ddd-font-navigation);
        color: rgb(204, 204, 253);
        font-size: 2rem;
      }

      .wrapper {
        padding: 40px;
      }
    `];
  }


  render() {
    return html`
      <div class="page-header">
        <h1>${this.title}</h1>
      </div>
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);