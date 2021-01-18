var _rootDiv, _childDiv, _sr;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { PlumElement } from 'plum-element';
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
const hAttr = 'h';
const vAttr = 'v';
const fAttr = 'f';
const attrs = [tAttr, bAttr, lAttr, rAttr, hAttr, vAttr, fAttr];
const flexStartValue = 'flex-start';
const flexEndValue = 'flex-end';
const centerValue = 'center';
const growEnabledValue = '1';
const growDisabledValue = '0';
const directionRowValue = 'row';
const directionColumnValue = 'column';
const stretchValue = 'stretch';
export class QingDockBox extends PlumElement {
    constructor() {
        super();
        _rootDiv.set(this, void 0);
        _childDiv.set(this, void 0);
        _sr.set(this, void 0);
        const sr = this.attachShadow({ mode: 'open' });
        sr.appendChild(template.content.cloneNode(true));
        __classPrivateFieldSet(this, _sr, sr);
        __classPrivateFieldSet(this, _rootDiv, this.mustGetElement('#root'));
        __classPrivateFieldSet(this, _childDiv, this.mustGetElement('#child'));
    }
    static get plProps() {
        const defs = {};
        attrs.forEach((attr) => (defs[attr] = 'b'));
        return defs;
    }
    get t() {
        return this.getPLProp(tAttr);
    }
    set t(val) {
        this.setPLProp(tAttr, val);
    }
    get b() {
        return this.getPLProp(bAttr);
    }
    set b(val) {
        this.setPLProp(bAttr, val);
    }
    get l() {
        return this.getPLProp(lAttr);
    }
    set l(val) {
        this.setPLProp(lAttr, val);
    }
    get r() {
        return this.getPLProp(rAttr);
    }
    set r(val) {
        this.setPLProp(rAttr, val);
    }
    get h() {
        return this.getPLProp(hAttr);
    }
    set h(val) {
        this.setPLProp(hAttr, val);
    }
    get v() {
        return this.getPLProp(vAttr);
    }
    set v(val) {
        this.setPLProp(vAttr, val);
    }
    get f() {
        return this.getPLProp(fAttr);
    }
    set f(val) {
        this.setPLProp(fAttr, val);
    }
    connectedCallback() {
        this.updateLayout();
    }
    mustGetElement(query) {
        const element = __classPrivateFieldGet(this, _sr).querySelector(query);
        if (!element) {
            throw new Error(`Element "${query}" is not found`);
        }
        return element;
    }
    onPLPropUpdated() {
        if (!this.isConnected) {
            return;
        }
        this.updateLayout();
    }
    getEdges() {
        let { t, b, l, r } = this;
        const { f, h, v } = this;
        if (f) {
            t = b = l = r = true;
        }
        else {
            if (h) {
                l = r = true;
            }
            if (v) {
                t = b = true;
            }
        }
        return { t, b, l, r };
    }
    updateLayout() {
        const rootStyle = __classPrivateFieldGet(this, _rootDiv).style;
        const childStyle = __classPrivateFieldGet(this, _childDiv).style;
        const { t, b, l, r } = this.getEdges();
        const edges = [t, b, l, r].filter((e) => e).length;
        rootStyle.flexDirection = directionColumnValue;
        rootStyle.justifyContent = centerValue;
        rootStyle.alignItems = centerValue;
        childStyle.flexGrow = growDisabledValue;
        if (edges === 1 || edges === 2) {
            if (t && b) {
                childStyle.flexGrow = growEnabledValue;
            }
            else if (l && r) {
                childStyle.flexGrow = growEnabledValue;
                rootStyle.flexDirection = directionRowValue;
            }
            else {
                if (t || b) {
                    rootStyle.justifyContent = this.t ? flexStartValue : flexEndValue;
                }
                if (l || r) {
                    rootStyle.alignItems = this.l ? flexStartValue : flexEndValue;
                }
            }
        }
        else if (edges === 3) {
            childStyle.flexGrow = growEnabledValue;
            if (!l || !r) {
                rootStyle.alignItems = this.l ? flexStartValue : flexEndValue;
            }
            else {
                rootStyle.flexDirection = directionRowValue;
                rootStyle.alignItems = this.t ? flexStartValue : flexEndValue;
            }
        }
        else if (edges === 4) {
            childStyle.flexGrow = growEnabledValue;
            rootStyle.alignItems = stretchValue;
        }
    }
}
_rootDiv = new WeakMap(), _childDiv = new WeakMap(), _sr = new WeakMap();
customElements.define('qing-dock-box', QingDockBox);
//# sourceMappingURL=main.js.map