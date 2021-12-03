import { LightningElement } from 'lwc';

export default class EventBubblingChild extends LightningElement {
    
    handleSendData(){
        console.log('Am in child component');        
    }
    
    handleClick(){
        //Bubbles:false & composed:false 
        //output: Am in child component
       /* this.template.querySelector('.a')
                .dispatchEvent(
                    new CustomEvent('senddata')
                );
        */
        //Bubbles:true & composed:false
        //output: Am in child component
        this.template.querySelector('.a')
                    .dispatchEvent(
                        new CustomEvent('senddata',{bubbles:true})
                    );
    }
}