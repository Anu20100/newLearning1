import { LightningElement } from 'lwc';

export default class CalculatorAppUsingLabelAsOperation extends LightningElement {
    num1;
    num2;
    total =0;

    
    handleNumberChange(event) {
        const numberName = event.target.name;
        console.log('numberName'+numberName);
        if (numberName === 'Number1') {
            console.log('inside num1');
            this.num1 =  event.target.value;
        }else if (numberName === 'Number2') {
            console.log('inside num2');
            this.num2 =  event.target.value;
        }

    }

    handleButtonClick(event){
        const operation = event.target.label;
        console.log('inside button click')
        if(operation === 'Add +'){
            this.total = parseInt(this.num1) + parseInt(this.num2);
            console.log('total'+this.total);
        }else if(operation === 'Subtract -'){
            this.total = parseInt(this.num1) - parseInt(this.num2);
        }else if(operation === 'Multiply *'){
            this.total = parseInt(this.num1) * parseInt(this.num2);
        }else if(operation === 'Divide /'){
            this.total = parseInt(this.num1) / parseInt(this.num2);
        }

    }

    get result(){
       return `${this.total}`;
    }


}