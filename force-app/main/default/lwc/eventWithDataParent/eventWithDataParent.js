import { LightningElement, wire } from 'lwc';
import contactList from '@salesforce/apex/ContactController.contactList'

export default class EventWithDataParent extends LightningElement {
    selectedContact ;
    @wire(contactList) contacts;
    handleSelected(event){
        const contactId = event.detail;
        //find() returns first element from the array which matches the condition else returns undefined
        //arrow function: function(contactlist){return contactlist.Id === contactId }; '===' boolean output
        // array = this.contacts.data
        this.selectedContact = this.contacts.data.find(contactlist => contactlist.Id === contactId);
    }
}