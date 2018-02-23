import Controller from "./controller/citycontroller";
import model from "./model/city";
import View from "./view/cityview";

(function(){
let view = new View({paystreet:
document.querySelector('#paystreet'),
paycity:
document.querySelector('#paycity'),
shippingstreet:
document.querySelector('#shippingstreet'),
shippingcity:
document.querySelector('#shippingcity'),
checkbox:
document.querySelector('#checkbox')

})
let controller = new Controller();
view.initialize();

}()); 