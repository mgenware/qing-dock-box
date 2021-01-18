import { PlumElement, PlumPropDefs } from 'plum-element';
export declare class QingDockBox extends PlumElement {
    #private;
    static get plProps(): PlumPropDefs;
    get t(): boolean;
    set t(val: boolean);
    get b(): boolean;
    set b(val: boolean);
    get l(): boolean;
    set l(val: boolean);
    get r(): boolean;
    set r(val: boolean);
    get h(): boolean;
    set h(val: boolean);
    get v(): boolean;
    set v(val: boolean);
    get f(): boolean;
    set f(val: boolean);
    constructor();
    connectedCallback(): void;
    private mustGetElement;
    protected onPLPropUpdated(): void;
    protected getEdges(): {
        t: boolean;
        b: boolean;
        l: boolean;
        r: boolean;
    };
    private updateLayout;
}
