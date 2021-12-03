import { LightningElement } from 'lwc';

export default class LifecycleHookChild extends LightningElement {
    constructor(){
        super();
        console.log('Inside Child Constructor');
    }

    connectedCallback(){
        console.log('Inside Child connectedCallback');
    }

    renderedCallback(){
        console.log('Inside Child renderedCallback' );
    }

    disconnectedCallback(){
        alert('Inside Child disconnectedCallback' );
    }
}