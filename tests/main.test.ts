/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import '..';
import { QingDockBox } from '..';

const gridSize = 50;

const defaultStyles = html` <style>
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  qing-dock-box {
    border: 1px solid gray;
    width: 200px;
    height: 200px;
  }
  div {
    background-color: #fecd21;
    width: 100px;
    height: 100px;
  }
</style>`;

function verifyXY(el: QingDockBox, x: number, y: number) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement?.getBoundingClientRect();
  if (!parentRect) {
    throw new Error(`Unexpected undefined \`parentRect\` for element ${el}`);
  }
  expect(rect.x - parentRect.x).to.equal(x);
  expect(rect.y - parentRect.y).to.equal(y);
}

describe('Centers child by default', () => {
  it('Has a default value of 0', async () => {
    const el: QingDockBox = await fixture(html`${defaultStyles}<qing-dock-box></qing-dock-box>`);
    verifyXY(el, gridSize, gridSize);
  });
});
