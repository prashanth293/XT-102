import Observer from"../observer/listenernotify1";
class Model{
    constructor(meal,amount,total,index,index1){
        this.meal=meal;
        this.amount=amount;
        this.total=0;
        this.index=-1;
        this.index1=0;
        this.observer=new Observer();  
    }
    add(meal,amount){
        this.meal=meal;
        this.amount=parseInt(amount);
        this.total+=this.amount;
        this.observer.notify(this.meal,this.amount,this.total,this.index);
    }
    update(meal,amount,total,index){
        this.meal=meal;
        this.amount=parseInt(amount);
        this.total=total;
        this.total+=this.amount;
        this.index1=index;
        this.observer.notify(this.meal,this.amount,this.total,this.index1);
    }    
}
export default new Model()