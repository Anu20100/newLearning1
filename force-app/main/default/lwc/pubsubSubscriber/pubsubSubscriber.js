import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubSubscriber extends LightningElement {
    message;
    connectedCallback(){
        this.register();
    }
    register(){
        pubsub.subscribe("simpleevent",this.handleEvent.bind(this));
    }
    handleEvent(messageFromEvt){
        this.message = messageFromEvt ? JSON.stringify(messageFromEvt,null,"\t") : "no message to display";
        //this.message = JSON.stringify(messageFromEvt);

    }
}