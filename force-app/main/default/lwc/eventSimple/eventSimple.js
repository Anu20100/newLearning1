import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    page = 1;
    handlePrevious(event){
        this.page = this.page > 1 ? this.page - 1 : this.page
    }
    handleNext(event){
        this.page = this.page + 1
    }
}