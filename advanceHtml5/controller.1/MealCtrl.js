import DataStorage from '../storage/mealstorage'
import meal from'../model/meal'
class MealController{
    constructor(){
        this.items=DataStorage.getMeals();
        this.currentMeal=null;
        this.totalCalories=0;
    }
    addmeal(name,calorie){
        let ID;
        if(this.items.length>0){
            ID=this.items[this.items.length-1].id+1;
        }
        else{
            ID=0;
        }
        newmeal=new Model(ID,name,calorie);
        this.items.push(newMeal);
        return newMeal;

    }
}
export default new MealController();