import { LightningElement, api } from 'lwc';

export default class ContactListItemChild extends LightningElement {
    @api contact
    handleClick(event){
        //prevent anchor element from navigating to URL link
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('selected',{detail : this.contact.Id}))
    }
}