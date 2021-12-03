import ContactMobile from '@salesforce/schema/Case.ContactMobile';
import { LightningElement, track } from 'lwc';

export default class QuizGame extends LightningElement {
    clicked = false;
    @track value = '';
    finishText = '';
    finishQuiz;
    handleClick() {
        console.log('1'+this.clicked);
        this.clicked = true;
        console.log('2'+this.clicked);

    }
    
    get options() {
        return [
            { label: 'Lightning Web Components', value: 'option1' },
            { label: 'Lightning Website Components', value: 'option2' },
        ];
    }
    handleFinishQuiz(){
        //this.finishQuiz = true;
        this.clicked = false;
        console.log('3'+this.clicked);
        alert('The Quiz is finished');
        //this.finishText  = 'The Quiz is finished';
    }
    
}