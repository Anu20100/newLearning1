import { LightningElement } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    firstName = "Anupama";
    handleChange(event){
       this.firstName = event.target.value;
    }
}