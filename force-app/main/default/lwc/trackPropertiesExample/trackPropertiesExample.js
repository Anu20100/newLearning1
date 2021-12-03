import { LightningElement,track } from 'lwc';

export default class TrackPropertiesExample extends LightningElement {
 firstName = 'Anupama'
 title = 'Developer'
 @track address = {
     city:'Mumbai',
     state:'Maharashtra',
     pincode: 400705
 }
 handleChange(event){
    this.address.city = event.target.value
    console.log('City:'+this.address.city)
    //this.address.state = event.target.value
   // console.log('State:'+this.address.state)
 }
}