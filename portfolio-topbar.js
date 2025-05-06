
/**
 * Copyright 2025 milestudor
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioTopbar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-topbar";
  }
  
  constructor() {
    super();
  }

  // Lit scoped styles
  static get styles() {
     return [super.styles,
     css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        z-index: 1000;
      }

      .wrapper
      {
        position: fixed;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        background:  linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url("https://cdn.pixabay.com/photo/2015/03/26/09/54/pattern-678655_1280.png");
        background-color: darkblue;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow-x: hidden;
        }

    .links{
       margin: auto;
       display: flex;
       gap: 20px;
       align-items: center;
     }
    `];
 }


  render() {
    return html`
      <div class="wrapper">
        <div class="links">
          <a @click=${() => this.scrollTo("#screen-1")}>About</a>
          <a @click=${() => this.scrollTo("#screen-2")}>Research</a>
          <a @click=${() => this.scrollTo("#screen-3")}>Presentations & Publications</a>
          <a @click=${() => this.scrollTo("#screen-4")}>Professional Development</a>
          <scroll-button></scroll-button>
        </div>
      </div>`;
  }

  scrollTo(id) {
    const element = this.shadowRoot.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
    }
  } 

}

globalThis.customElements.define(PortfolioTopbar.tag, PortfolioTopbar);
