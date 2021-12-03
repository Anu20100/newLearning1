import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api message;
    @api arrayList;
    @api percent;

    val = 5;
    handleChange(event){
        this.val = event.target.value;
    }
    @api resetValue(){
        this.val = 10;
    }
}