import Model from "../model/city";
import Controller from "../controller/citycontroller";
export default class View{
    constructor(elements){
        this.elements=elements;
        this.model=Model;
        this.controller=new Controller();
    }
    initialize(){
        this.model.observer.attach((city,street)=>{
            this.render(city,street)
        })
        
        
        this.elements.checkbox.addEventListener('change',(e)=>{
            
            if(e.target.checked)
           {
                this.controller.copy(this.elements.paycity.value,this.elements.paystreet.value);
                
            }
            else{
                this.elements.shippingstreet.innerHTML='';
                this.elements.shippingcity.innerHTML='';
            }

            
        })
        
    }
    render(newcity,newstreet){
        
        this.elements.shippingstreet.value=newstreet;
         this.elements.shippingcity.value=newcity ;
         
    }
}