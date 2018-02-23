import Model from"../model/model";
export default class Controller{
    constructor(){
        this.model=Model;
    }
    add(meal,amount){
        this.model.add(meal,amount);
    }
}