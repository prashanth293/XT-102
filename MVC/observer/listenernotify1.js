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
    notify(meal,amount,total){
        this.observers.forEach((cb)=>{
            cb(meal,amount,total);
        })
    }
}