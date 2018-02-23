import Observer from"../observer/listenernotify1";
class Model{
    constructor(meal,amount,total){
        this.meal=meal;
        this.amount=amount;
        this.total=0;
        this.observer=new Observer();  
    }
    add(meal,amount){
        this.meal=meal;
        this.amount=parseInt(amount);
        this.total+=this.amount;
        this.observer.notify(this.meal,this.amount,this.total);
    }   
}
export default new Model()