/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import '..';
import { QingDockBox } from '..';

const gridSize = 50;
const pStyle = 'width:200px;height:200px';
const cStyle = 'width:100px;height:100px';

function verifyXY(el: Element, x: number, y: number) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement?.getBoundingClientRect();
  if (!parentRect) {
    throw new Error(`Unexpected undefined \`parentRect\` for element ${el}`);
  }
  expect(rect.x - parentRect.x).to.equal(x);
  expect(rect.y - parentRect.y).to.equal(y);
}

describe('Props', () => {
  it('Has a default value of 0', async () => {
    const el: QingDockBox = await fixture(
      html`<qing-dock-box style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
    );
    const child = el.firstElementChild!;
    verifyXY(child, gridSize, gridSize);
  });

  it('t', async () => {
    const el: QingDockBox = await fixture(
      html`<qing-dock-box t style=${pStyle}><div style=${cStyle}>A</div></qing-dock-box>`,
    );
    const child = el.firstElementChild!;
    verifyXY(child, gridSize, gridSize);
  });
});
