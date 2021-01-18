/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import { cStyle, pStyle } from './common';
import './tElement';
import { TElement } from './tElement';

it('h', async () => {
  const el: TElement = await fixture(
    html`<t-element h style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: false, b: false, l: true, r: true });
});

it('v', async () => {
  const el: TElement = await fixture(
    html`<t-element v style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: true, l: false, r: false });
});

it('f', async () => {
  const el: TElement = await fixture(
    html`<t-element f style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: true, l: true, r: true });
});

it('v + h', async () => {
  const el: TElement = await fixture(
    html`<t-element v h style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: true, l: true, r: true });
});

it('v + l', async () => {
  const el: TElement = await fixture(
    html`<t-element v l style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: true, l: true, r: false });
});

it('v + r', async () => {
  const el: TElement = await fixture(
    html`<t-element v r style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: true, l: false, r: true });
});

it('h + t', async () => {
  const el: TElement = await fixture(
    html`<t-element h t style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: true, b: false, l: true, r: true });
});

it('h + b', async () => {
  const el: TElement = await fixture(
    html`<t-element h b style=${pStyle}><div style=${cStyle}>A</div></t-element>`,
  );
  expect(el.tGetEdges()).to.deep.eq({ t: false, b: true, l: true, r: true });
});
