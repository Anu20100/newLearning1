import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    previousHandler(){
        this.dispatchEvent(new CustomEvent('previous'))
    }
    nextHandler(){
       // alert('Inside Next Handler');
       this.dispatchEvent(new CustomEvent('next'))
    }
}