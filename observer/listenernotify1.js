export default class Observer{
    constructor(meal,amount,total){
        this.meal=meal;
        this.amount=amount;
        this.total=total;
        this.observers=[];
    }
    attach(cb){
        this.observers.push(cb);
    }
    notify(meals){
        this.observers.forEach((cb)=>{
            cb(meals);
        })
    }
}