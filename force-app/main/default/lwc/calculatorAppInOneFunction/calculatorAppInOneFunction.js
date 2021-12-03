import { LightningElement } from 'lwc';

export default class CalculatorApp extends LightningElement {
    num1;
    num2;
    total;
    
    buttonClicked = false;
    oper;

    handleNum1Change(event){
        this.num1 = event.target.value;
        //this.calculation();
    }
    handleNum2Change(event){
        this.num2 = event.target.value;
        //this.calculation();
    }
    
    handleChangeOper(event){       

        this.oper = event.target.value;
        console.log('inside handleChangeOper'+this.oper);
        this.calculation();
        this.buttonClicked = true;
    }
    get operOpt(){
        return [
            {label : '+', value:'+'},
            {label : '-', value:'-'},
            {label : '*', value:'*'},
            {label : '/', value:'/'}
        ];
    }   

    calculation(){
        console.log('inside calculator'+this.oper);
        switch (this.oper){
            case '+' :
                this.total = parseInt(this.num1) + parseInt(this.num2);
                break;
            case '-' :               
                this.total = parseInt(this.num1) - parseInt(this.num2);
                break;
            case '*' :
                this.total = parseInt(this.num1) * parseInt(this.num2);
                break;
            case '/' :
                this.total = parseInt(this.num1) / parseInt(this.num2);
                break;                        
            default :
             this.total = '';
  
        }
    }
    
    
    get result(){
        return `${this.total}`;
    }
    
}