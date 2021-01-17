/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import '..';
import { QingDockBox } from '..';

const pStyle = 'width:200px;height:200px';
const cStyle = 'min-width:100px;min-height:100px';

function verifyRect(el: Element, x: number, y: number, width: number, height: number) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement?.getBoundingClientRect();
  if (!parentRect) {
    throw new Error(`Unexpected undefined \`parentRect\` for element ${el}`);
  }
  expect(rect.x - parentRect.x).to.eq(x);
  expect(rect.y - parentRect.y).to.eq(y);
  expect(rect.width).to.eq(width);
  expect(rect.height).to.eq(height);
}

it('Has a default value of 0', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 50, 50, 100, 100);
});

it('t', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 50, 0, 100, 100);
});

it('b', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box b style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 50, 100, 100, 100);
});

it('l', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box l style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 50, 100, 100);
});

it('r', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 100, 50, 100, 100);
});

it('Corner: t l', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t l style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 0, 100, 100);
});

it('Corner: t r', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 100, 0, 100, 100);
});

it('Corner: b l', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box b l style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 100, 100, 100);
});

it('Corner: b r', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box b r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 100, 100, 100, 100);
});
