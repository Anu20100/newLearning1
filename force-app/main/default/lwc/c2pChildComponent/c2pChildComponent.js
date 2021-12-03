import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    handleClick(){
        const simpleEvent = new CustomEvent('close')
        this.dispatchEvent(simpleEvent);
    }
}