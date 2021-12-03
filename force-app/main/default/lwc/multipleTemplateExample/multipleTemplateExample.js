import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class MultipleTemplateExample extends LightningElement {
    templateOne = true;

    render(){
       // console.log('inside render:'+templateOne);
        return this.templateOne ? templateOne : templateTwo;
    }
    switchTemplate(){
       // console.log('inside switchTemplate1:'+this.templateOne);
        this.templateOne = this.templateOne === true ? false : true;
        //console.log('inside switchTemplate2:'+this.templateOne);
    }
}