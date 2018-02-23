import Controller from "./controller/controller";
import model from "./model/model";
import View from "./view/view";

(function(){
let view = new View({addmeal:
document.querySelector('#addMeal'),
updatemeal:
document.querySelector('#updateMeal'),
deletemeal:
document.querySelector('#deleteMeal'),
backbtn:
document.querySelector('#backbtn'),
clearall:
document.querySelector('#clearall'),
meal:
document.querySelector('#meal'),
amount:
document.querySelector('#amount'),
totalcalorie:
document.querySelector('#totalCalorie'),
maintable:
document.querySelector('#maintable')

})
let controller = new Controller();
view.initialize();

}()); 