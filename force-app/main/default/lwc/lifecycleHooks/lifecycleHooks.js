import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    constructor(){
        //The first statement must be super() with no parameters. 
        //This call establishes the correct prototype chain and value for this.
        super();
        
        console.log('Inside Parent Constructor');
        //this.classList.add('new-class')
        //Assert Violation: Failed to construct [object:vm LifecycleHooks (59)]: 
        //The result must not have attributes. 
        //Adding or tampering with classname in constructor is not allowed in a web component,
        //use connectedCallback() instead.
    }
    arrayList=[]
    connectedCallback(){
        console.log('Inside Parent connectedCallback');
        this.arrayList.push(1,2,3,4,5);

        console.log('arrayList:'+this.arrayList);
    }

    renderedCallback(){
        console.log('Inside Parent renderedCallback' );
    }

    disconnectedCallback(){
        this.arrayList=[];
        console.log('Inside Parent disconnectedCallback' );
        console.log('arrayList new:'+this.arrayList);
    }
}