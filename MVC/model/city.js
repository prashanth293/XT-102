import Observer from"../observer/listenernotify";
class Model{
    constructor(city,street){
        this.city=city;
        this.street=street;
        this.observer=new Observer();  
    }
    copy(city,street){
        
        this.observer.notify(city,street);
    }   
}
export default new Model()