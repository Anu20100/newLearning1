import { LightningElement } from 'lwc';

export default class MultipleTemplateIfElse extends LightningElement {
    template = true;

    switchTemplate(){
        this.template = this.template === true ? false : true;
        console.log(this.template);
    }
}