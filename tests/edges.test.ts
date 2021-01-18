/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture } from '@open-wc/testing';
import '..';
import { QingDockBox } from '..';
import { verifyRect, cStyle, pStyle } from './common';

it('Centered by default', async () => {
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

it('3 edges: left', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t b l style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 0, 100, 200);
});

it('3 edges: right', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t b r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 100, 0, 100, 200);
});

it('3 edges: top', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t l r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 0, 200, 100);
});

it('3 edges: bottom', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box r b l style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 100, 200, 100);
});

it('full', async () => {
  const el: QingDockBox = await fixture(
    html`<qing-dock-box t b l r style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
  );
  const child = el.firstElementChild!;
  verifyRect(child, 0, 0, 200, 200);
});
