import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    //Data Binding Example
    fullName ="Khushboo Sethi"
    title="Salesforce Developer"

    changeHandler(event){
        this.title = event.target.value;
    }

    //@track Example

    address={
        city:"Sonipat",
        postcode : 131101,
        country: "India"
    }

    @track userList = ["a","b","c"];

    trackHandler(event){
        this.address = {...this.address, "city":event.target.value};

        this.userList[1] = event.target.value;
    }

    
    //Getter Example
    users = ["John","Nick","Akash"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}