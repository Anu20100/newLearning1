import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
    firstName = 'Anupama';
    lastName = 'Mahato';



    handleChange(event) {
        const field = event.target.value;
        console.log('field'+field);
        if(field === 'firstName')
        {   this.firstName = event.target.value;
            console.log('firstname:'+event.target.value);
        }else if(field === 'lastName'){
            this.lastName = event.target.value;
            console.log('lastname:'+event.target.value);
        }
        //this.firstName = event.target.value;
        //this.lastName = event.target.value;


    }
    get upperCaseFullName(){
        return `${this.firstName}  ${this.lastName}`.toUpperCase();
    }
}