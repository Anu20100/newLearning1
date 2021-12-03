import { LightningElement,wire } from 'lwc';
import {subscribe, APPLICATION_SCOPE, MessageContext} from 'lightning/messageService';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';


export default class LmsSubscriber extends LightningElement {
    receivedMessage
    @wire(MessageContext)
    context;

    subscription = null;
    connectedCallback() {
        this.handleSubscribe();
    }
    handleSubscribe(){
         subscribe(this.context,SampleMessageChannel, (message) =>this.handleMessage(message));
    }
    handleMessage(message){
        this.receivedMessage = message.lmsData.value;
    }
    

}