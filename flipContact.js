import { LightningElement,wire } from 'lwc';
import contactList from '@salesforce/apex/ContactController.contactList';

export default class FlipContact extends LightningElement {
    contactData =[]
    error

    @wire(contactList)
    contacts({data,error}){
        if(data){
            this.contactData = data
            console.log(this.contactData)
        }else if(error){
            this.error = error
        }
    }
   
}