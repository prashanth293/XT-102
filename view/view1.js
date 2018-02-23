import MealController from '../controller/controller1'
//import Model from '../model/model1'
import DataStorage from '../storage/mealstorage'
export default class View{
    constructor(elements){
        this.elements=elements;
        //this.model=new Model();
        this.controller= MealController;
        this.items=DataStorage.getMeals();
    }
    initialize(){
        debugger;
        
            this.render(this.items);
    
        
        
        this.elements.addmeal.addEventListener('click',(e)=>{
            debugger;
            
            if(this.elements.meal.value!="" && this.elements.amount.value!="")
           {
                this.controller.addMeal(this.elements.meal.value,this.elements.amount.value);
                this.elements.meal.value="";
                this.elements.amount.value="" ;   
            }
        })
        this.elements.updatemeal.addEventListener('click',(e)=>{
            
            if(this.elements.meal.value!="" && this.elements.amount.value!="")
           {
                this.controller.updateMeal(this.elements.meal.value,this.elements.amount.value);
                this.elements.meal.value="";
                this.elements.amount.value="" ;   
            }
        })
        // this.elements.clearall.addEventListener('click',(e)=>{
        //     while (this.elements.maintable.hasChildNodes()) {
        //         this.elements.maintable.removeChild(this.elements.maintable.firstChild);
        //     }
        //     this.model.total=0;
        //     this.elements.totalcalorie.innerHTML="Total calories:" +this.model.total;
        //     this.elements.meal.value="";
        //     this.elements.amount.value="" ;        
        // })   
    }

    render(newmeals){
        for(let i=0;i<=newmeals.length;i++){
            debugger;
            
            if(localStorage.getItem('newmeals')===null){
                continue;
            }
            else{
                key=localStorage.key(i);
                newmeals=localStorage.getItem(key);
                let trow=document.createElement("tr")
                let tdata1=document.createElement("td");
                let tdata2=document.createElement("td");
                let tdata3=document.createElement("td");
                let editbtn=document.createElement("button");
                editbtn.innerHTML="edit";
                tdata1.innerHTML=newmeals.meal;
                tdata2.innerHTML=newmeals.calorie;
                //this.elements.totalcalorie.innerHTML="Total calories:" +newtotal;
                tdata3.appendChild(editbtn);
                trow.appendChild(tdata1);
                trow.appendChild(tdata2);
                trow.appendChild(tdata3);
                this.elements.maintable.appendChild(trow);
            }
        }
    }
}