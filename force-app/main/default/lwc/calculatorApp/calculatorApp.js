import { LightningElement } from 'lwc';

export default class CalculatorApp extends LightningElement {
    num1;
    num2;
    total;
    operator;
    sumOld;
    subOld;
    mulOld;
    divOld;
    buttonClicked = false;
    showRes = false;

    handleNum1Change(event){
        this.num1 = event.target.value;
    }
    handleNum2Change(event){
        this.num2 = event.target.value;
    }
    
    onAdd(){
        
        this.total = parseInt(this.num1) + parseInt(this.num2);
        console.log('add:'+this.total);
        this.operator = '+';
        this.sumOld = this.total;
        this.buttonClicked = true;
    }
    onSub(){
        
        this.total = parseInt(this.num1) - parseInt(this.num2);
        console.log('sub:'+this.total);
        this.operator = '-';
        this.subOld = this.total;
        this.buttonClicked = true;
    }
    onMul(){    
        
        this.total = parseInt(this.num1) * parseInt(this.num2);
        console.log('mul:'+this.total);
        this.operator = '*';
        this.mulOld = this.total;
        this.buttonClicked = true;
    }
    onDiv(){
        
        this.total = parseInt(this.num1) / parseInt(this.num2);
        console.log('div:'+this.total);
        this.operator = '/';
        this.divOld = this.total;
        this.buttonClicked = true;
    }

    get result(){
        return `${this.total}`;
    }
    showPreviousResult(event){
        this.showRes = event.target.checked;
        console.log('prevres:' +this.showRes);
        this.sumOld;
        this.subOld;
        this.mulOld;
        this.divOld;
        
    }
}