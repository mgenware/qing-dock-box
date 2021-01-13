/**
 * ## Element hierarchy:
 *
 * --- :host (flex) --------------
 * --- root div (flex) -----------
 *  | spacing based on configuration
 * --- slot ----------------------
 *
 * We use a root div in between :host and slot because we don't want flex
 * attributes in root to be exposed to public.
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {
    display: flex;
  }
  #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  </style>
  <div id="root"><slot></slot></div>`;

const tAttr = 't';
const bAttr = 'b';
const lAttr = 'l';
const rAttr = 'r';
const edgeAttrs = [tAttr, bAttr, lAttr, rAttr];
const flexStartValue = 'flex-start';
const flexEndValue = 'flex-end';

export class QingDockBox extends HTMLElement {
  static get observedAttributes() {
    return [tAttr, bAttr, lAttr, rAttr];
  }

  #rootDiv: HTMLDivElement;
  #sr: ShadowRoot;

  #props: Record<string, boolean> = {};

  getProp(prop: string): boolean {
    return this.#props[prop] || false;
  }

  setProp(prop: string, value: boolean) {
    const prev = this.#props[prop];
    if (prev !== value) {
      this.updateProp(prop, value);
    }
  }

  constructor() {
    super();

    const sr = this.attachShadow({ mode: 'open' });
    sr.appendChild(template.content.cloneNode(true));
    this.#sr = sr;

    this.#rootDiv = this.mustGetElement('#root');
  }

  connectedCallback() {
    const rootDivStyle = this.#rootDiv.style;
    rootDivStyle.justifyContent = 'center';
    rootDivStyle.alignItems = 'center';
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    this.setProp(name, newValue !== null);
  }

  private mustGetElement<T extends HTMLElement>(query: string): T {
    const element = this.#sr.querySelector(query);
    if (!element) {
      throw new Error(`Element "${query}" is not found`);
    }
    return element as T;
  }

  private updateProp(prop: string, val: boolean) {
    // Update props.
    this.#props[prop] = val;
    // Update attribute.
    if (val) {
      this.setAttribute(prop, '');
    } else {
      this.removeAttribute(prop);
    }
    // Update style.
    const rootStyle = this.#rootDiv.style;
    const edges = edgeAttrs.filter((p) => this.getProp(p)).length;
    if (edges <= 2) {
      if (this.getProp(tAttr)) {
        rootStyle.justifyContent = flexStartValue;
      }
      if (this.getProp(bAttr)) {
        rootStyle.justifyContent = flexEndValue;
      }
      if (this.getProp(lAttr)) {
        rootStyle.alignItems = flexStartValue;
      }
      if (this.getProp(rAttr)) {
        rootStyle.alignItems = flexEndValue;
      }
    }
  }
}

customElements.define('qing-dock-box', QingDockBox);
