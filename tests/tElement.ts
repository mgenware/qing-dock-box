/* eslint-disable no-param-reassign, @typescript-eslint/no-explicit-any */
import '..';
import { QingDockBox } from '..';

export class TElement extends QingDockBox {
  tGetEdges(): { t: boolean; b: boolean; l: boolean; r: boolean } {
    return this.handleFalsyValues(super.getEdges());
  }

  // eslint-disable-next-line class-methods-use-this
  private handleFalsyValues<T>(obj: T): T {
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined) {
        (obj as any)[k] = false;
      }
    }
    return obj;
  }
}

customElements.define('t-element', TElement);
