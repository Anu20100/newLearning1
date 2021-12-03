import { LightningElement ,api} from 'lwc';

export default class HelloWorld extends LightningElement {
     firstName = "Anupama Mahato";
     @api firstName;
}