import { expect } from '@open-wc/testing';

export const pStyle = 'width:200px;height:200px';
export const cStyle = 'min-width:100px;min-height:100px';

export function verifyRect(el: Element, x: number, y: number, width: number, height: number) {
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
