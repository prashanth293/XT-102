export default class Observer{
    constructor(city,street){
        this.city=city;
        this.street=street;
        this.observers=[];
    }
    attach(cb){
        this.observers.push(cb);
    }
    notify(city,street){
        this.observers.forEach((cb)=>{
            cb(city,street);
        })
    }
}