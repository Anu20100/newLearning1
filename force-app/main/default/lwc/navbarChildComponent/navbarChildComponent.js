import { LightningElement, api } from 'lwc';

export default class NavbarChildComponent extends LightningElement {
    @api cricketerList
    handleClick(event){
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('selection',{detail: event.target.name}))
    }
}