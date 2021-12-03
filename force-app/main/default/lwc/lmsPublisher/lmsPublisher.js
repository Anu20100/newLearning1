import { publish,MessageContext } from 'lightning/messageService';
import { LightningElement,wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c'


export default class LmsPublisher extends LightningElement {
    inputVal
    @wire(MessageContext)
    context;

    onChangeHandler(event){
        this.inputVal = event.target.value;
        console.log("InsideOnchangeHandler"+this.inputVal);
    }
    onClickHandler(){
        const message = {
            lmsData:{
                value: this.inputVal
            }
        }
        publish(this.context,SampleMessageChannel,message);
    }

   
}