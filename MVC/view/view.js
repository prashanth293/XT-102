import Model from "../model/model";
import Controller from "../controller/controller";
export default class View{
    constructor(elements){
        this.elements=elements;
        this.model=Model;
        this.controller=new Controller();
    }
    initialize(){
        this.model.observer.attach((meal,amount,total)=>{
            this.render(meal,amount,total)
        })
        
        
        this.elements.addmeal.addEventListener('click',(e)=>{
            
            if(this.elements.meal.value!="" && this.elements.amount.value!="")
           {
                this.controller.add(this.elements.meal.value,this.elements.amount.value);
                this.elements.meal.value="";
                this.elements.amount.value="" ;   
            }
        })   
    }
    render(newmeal,newamount,newtotal){
        let trow=document.createElement("tr")
        let tdata1=document.createElement("td");
        let tdata2=document.createElement("td");
        let tdata3=document.createElement("td");
        let editbtn=document.createElement("button");
        editbtn.innerHTML="edit";
        tdata1.innerHTML=newmeal;
        tdata2.innerHTML=newamount;
        this.elements.totalcalorie.innerHTML="Total calories:" +newtotal;
        tdata3.appendChild(editbtn);
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
        trow.appendChild(tdata3);
        this.elements.maintable.appendChild(trow);
                
    }
}