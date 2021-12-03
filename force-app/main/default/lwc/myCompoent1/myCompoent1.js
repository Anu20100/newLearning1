import { LightningElement } from 'lwc';

export default class MyCompoent1 extends LightningElement {
    myVar1;
    myVar2;
    handleChangeValue(event){
        console.log(event.target.value);
        this.myVar1 = event.target.value;
    }
    handleChangeValue2(event){
        console.log(event.target.value);
        this.myVar2= event.target.value;
    }

}