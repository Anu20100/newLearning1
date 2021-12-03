import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={};
    quizSubmitted = false;
    diableButton = true;

    questionList=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    
    changeHandler(event){
        const {name, value} = event.target 
        console.log('name,value'+name + value);
        this.selected={...this.selected, [name]:value}
        console.log('this.selected'+this.selected[name]); 
    }
    
    submitHandler(event){
        //event.preventDefault()
        //console.log('inside submit handler');
        let correct = this.questionList.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length;
       // console.log('this.correctAnswers:'+this.correctAnswers);
        this.quizSubmitted = true;   
       // console.log('this.quizSubmitted'+this.quizSubmitted); 
          
    }

    get optionB() {
        for(var j = 0; j < this.questionList.length; j++){
            console.log('this.selected[this.questionList[j].id]:'+this.questionList[j].id+'::'+this.selected[this.questionList[j].id] + '::'+this.questionList[j].correctAnswer);

                if ((this.selected[this.questionList[j].id] === this.questionList[j].correctAnswer) && (this.questionList[j].id === 'Question2')) {
                    return  'slds-col slds-text-color_success'
                } else return 'slds-col'
                
        }
    }

  /* get optionC() {
        for(var i = 0; i < this.questionList.length; i++){
            console.log('this.selected[this.questionList[i].id]::'+this.questionList[i].id+'::'+this.selected[this.questionList[i].id] + '::'+this.questionList[i].correctAnswer);

                if ((this.selected[this.questionList[i].id] === this.questionList[i].correctAnswer) && (this.questionList[i].id === 'Question1')) {
                    return  'slds-col slds-text-color_success'
                } else return 'slds-col'
                
        }
    }*/

    resetHandler(){
       // console.log('inside reset handler');
        selected={};
        this.correctAnswers = 0;
        this.quizSubmitted = false     

    }
     get allOptionsNotSelected() {
         if(!(Object.keys(this.selected).length === this.questionList.length)){ 
            // console.log('inside disable')
            this.diableButton = true;
            return this.diableButton;
        }       
     }

     get highlightFullScore() {
         if(this.correctAnswers === this.questionList.length){
            //console.log('inside highlightFullScore');
            return 'slds-text-heading_large slds-text-color_success'
         } else return 'slds-text-heading_large slds-text-color_error'
     }

    
    
}