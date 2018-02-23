import Model from"../model/city";
export default class Controller{
    constructor(){
        this.model=Model;
    }
    copy(city,street){
        this.model.copy(city,street);
    }
}