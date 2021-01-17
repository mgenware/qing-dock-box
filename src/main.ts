import { PlumElement, PlumPropDefs } from 'plum-element';

/**
 * ## Element hierarchy:
 *
 * --- :host (flex) --------------
 * --- root div (flex) -----------
 *  | spacing based on configuration
 * --- child div (flex) ----------
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
    flex-grow: 1;
  }
  #child {
    display: flex;
  }
  ::slotted(*) {
    flex-grow: 1;
    flex-basis: 0;
  }
  </style>
  <div id="root"><div id="child"><slot></slot></div></div>`;

const tAttr = 't';
const bAttr = 'b';
const lAttr = 'l';
const rAttr = 'r';
const flexStartValue = 'flex-start';
const flexEndValue = 'flex-end';
const centerValue = 'center';
const growEnabledValue = '1';
const growDisabledValue = '0';
const directionRowValue = 'row';
const directionColumnValue = 'column';

export class QingDockBox extends PlumElement {
  static get plProps(): PlumPropDefs {
    return {
      [tAttr]: 'b',
      [lAttr]: 'b',
      [rAttr]: 'b',
      [bAttr]: 'b',
    };
  }

  #rootDiv: HTMLDivElement;
  #childDiv: HTMLDivElement;
  #sr: ShadowRoot;

  get t(): boolean {
    return this.getPLProp(tAttr);
  }

  set t(val: boolean) {
    this.setPLProp(tAttr, val);
  }

  get b(): boolean {
    return this.getPLProp(bAttr);
  }

  set b(val: boolean) {
    this.setPLProp(bAttr, val);
  }

  get l(): boolean {
    return this.getPLProp(lAttr);
  }

  set l(val: boolean) {
    this.setPLProp(lAttr, val);
  }

  get r(): boolean {
    return this.getPLProp(rAttr);
  }

  set r(val: boolean) {
    this.setPLProp(rAttr, val);
  }

  constructor() {
    super();

    const sr = this.attachShadow({ mode: 'open' });
    sr.appendChild(template.content.cloneNode(true));
    this.#sr = sr;

    this.#rootDiv = this.mustGetElement('#root');
    this.#childDiv = this.mustGetElement('#child');
  }

  connectedCallback() {
    this.updateLayout();
  }

  private mustGetElement<T extends HTMLElement>(query: string): T {
    const element = this.#sr.querySelector(query);
    if (!element) {
      throw new Error(`Element "${query}" is not found`);
    }
    return element as T;
  }

  protected onPLPropUpdated() {
    if (!this.isConnected) {
      return;
    }
    this.updateLayout();
  }

  private getEdges(): { t: boolean; b: boolean; l: boolean; r: boolean } {
    return {
      t: this.t,
      b: this.b,
      l: this.l,
      r: this.r,
    };
  }

  private updateLayout() {
    const rootStyle = this.#rootDiv.style;
    const childStyle = this.#childDiv.style;
    const { t, b, l, r } = this.getEdges();
    const edges = [t, b, l, r].filter((e) => e).length;

    // Reset styles.
    rootStyle.flexDirection = directionColumnValue;
    rootStyle.justifyContent = centerValue;
    rootStyle.alignItems = centerValue;
    childStyle.flexGrow = growDisabledValue;

    if (edges === 1 || edges === 2) {
      // Check if it's stretched vertically or horizontally.
      if (t && b) {
        childStyle.flexGrow = growEnabledValue;
      } else if (l && r) {
        childStyle.flexGrow = growEnabledValue;
        rootStyle.flexDirection = directionRowValue;
      } else {
        if (t || b) {
          rootStyle.justifyContent = this.t ? flexStartValue : flexEndValue;
        }
        if (l || r) {
          rootStyle.alignItems = this.l ? flexStartValue : flexEndValue;
        }
      }
    } else if (edges === 3) {
      childStyle.flexGrow = growEnabledValue;
      if (!l || !r) {
        rootStyle.alignItems = this.l ? flexStartValue : flexEndValue;
      } else {
        rootStyle.flexDirection = directionRowValue;
        rootStyle.alignItems = this.t ? flexStartValue : flexEndValue;
      }
    }
  }
}

customElements.define('qing-dock-box', QingDockBox);
