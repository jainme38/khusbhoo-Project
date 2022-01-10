import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Hyundai","Ford","Maruti","Mercedes","Verna"];

    employeeList = [
        {
            id:1,
            name:"Khushboo",
            company:"Nagarro"
        },
        {
            id:2,
            name:"Megha",
            company:"Apisero"
        },
        {
            id:3,
            name:"Akash",
            company:"Deloitte"
        },
        {
            id:4,
            name:"Falak",
            company:"Deloitte"
        },
    ];
}