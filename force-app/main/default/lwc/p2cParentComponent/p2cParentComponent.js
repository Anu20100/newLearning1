import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    parentMessage = "Hey, Its a message from Parent!";
    percentage = 10;
    parentArrayList = [
        {
            id: 1,
            Name: 'Test1',
            Address: 'USA'
        },
        {
            id: 2,
            Name: 'Test2',
            Address: 'UK'
        },
        {
            id: 3,
            Name: 'Test3',
            Address: 'INDIA'
        }
    ]
    changeHandler(event){
        this.percentage = event.target.value <= 100 ? event.target.value : 100;
    }
    handleClick(){
        this.template.querySelector('c-p2c-child-component').resetValue()
    }
}