import { LightningElement } from 'lwc';

export default class EventBubblingParent extends LightningElement {
    handleSendData(){
        console.log('Am in parent component');        
    }
}