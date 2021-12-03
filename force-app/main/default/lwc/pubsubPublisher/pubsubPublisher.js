import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubPublisher extends LightningElement {
    handleClick(event){
        let message = {
           
            Message: "This message is coming from Publisher",
            SentBy: "Anupama"
        };
        pubsub.publish('simpleevent',message);
    }

}