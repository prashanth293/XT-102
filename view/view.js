import Model from "../model/model";
import Controller from "../controller/controller";
export default class View{
    constructor(elements){
        this.elements=elements;
        this.model=Model;
        this.controller=new Controller();
    }
    initialize(){
        this.model.observer.attach((meal,amount,total,index)=>{
            this.render(meal,amount,total,index)
        })
        
        
        this.elements.addmeal.addEventListener('click',(e)=>{
            
            if(this.elements.meal.value!="" && this.elements.amount.value!="")
           {
                this.controller.add(this.elements.meal.value,this.elements.amount.value);
                this.elements.meal.value="";
                this.elements.amount.value="" ;   
            }
        })
        this.elements.clearall.addEventListener('click',(e)=>{
            while (this.elements.maintable.hasChildNodes()) {
                this.elements.maintable.removeChild(this.elements.maintable.firstChild);
            }
            this.model.total=0;
            this.elements.totalcalorie.innerHTML="Total calories:" +this.model.total;
            this.elements.meal.value="";
            this.elements.amount.value="" ;        
        })   
    }
    render(newmeal,newamount,newtotal,index){
        if(index==-1){
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
            editbtn.addEventListener('click',(e)=>{
                    debugger;
                    this.elements.meal.value=e.currentTarget.parentElement.previousElementSibling.previousElementSibling.innerHTML;
                    this.elements.amount.value=e.currentTarget.parentElement.previousElementSibling.innerHTML;
                    this.elements.addmeal.style.display="none";
                    this.elements.updatemeal.style.display="inline";
                    this.elements.deletemeal.style.display="inline";
                    this.elements.backbtn.style.display="inline";
                    e.currentTarget.disabled=true;
                    let index=e.target.parentElement.parentElement.rowIndex;
                    let prevamount=parseInt(e.target.parentElement.previousElementSibling.innerHTML);
                    this.elements.updatemeal.addEventListener('click',(f)=>{
                        
                        
                        if(this.elements.meal.value!="" && this.elements.amount.value!=""){
                            
                            newmeal=this.elements.meal.value;
                            newamount=this.elements.amount.value;
                            let total=parseInt(this.model.total);
                            total-=prevamount;
                            this.controller.update(newmeal,newamount,total,index);
                            this.elements.meal.value=""
                            this.elements.amount.value=""
                            this.elements.addmeal.style.display="inline";
                            this.elements.updatemeal.style.display="none";
                            this.elements.deletemeal.style.display="none";
                            this.elements.backbtn.style.display="none";
                            editbtn.disabled=false;
                        }
                    })
                    this.elements.deletemeal.addEventListener('click',(g)=>{
                        debugger;
                        
                        this.elements.maintable.children[index].remove();
                        this.model.total-=prevamount;
                        this.elements.totalcalorie.innerHTML="Total calories:" +this.model.total;
                        this.elements.meal.value=""
                        this.elements.amount.value=""
                        this.elements.addmeal.style.display="inline";
                        this.elements.updatemeal.style.display="none";
                        this.elements.deletemeal.style.display="none";
                        this.elements.backbtn.style.display="none";
                        editbtn.disabled=false;
                        
                    })    
            })
    }
    else{
        
        this.elements.maintable.children[index].children[0].innerHTML=newmeal;
        this.elements.maintable.children[index].children[1].innerHTML=parseInt(newamount);
        this.elements.totalcalorie.innerHTML="Total calories:" +newtotal;
        
    }
        this.elements.backbtn.addEventListener('click',(e)=>{
           
           this.elements.meal.value=""
           this.elements.amount.value=""
           this.elements.addmeal.style.display="inline";
           this.elements.updatemeal.style.display="none";
           this.elements.deletemeal.style.display="none";
           this.elements.backbtn.style.display="none";
           editbtn.disabled=false;

        })
                     
    }
}