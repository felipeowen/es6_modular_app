import $ from 'jquery';

import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';
import {DronesPage} from './drones-page.js';

export class App extends ApplicationBase {
	constructor() {
		super('Fleet Manager');
		this.dataService = new FleetDataService();
		this.dataService.loadData(fleet);
	
		this.addRoute('Home', new HomePage(), true);
		this.addRoute('Cars', new CarsPage());
		this.addRoute('Drones', new DronesPage());
		this.addRoute('Map', new MapPage());
	}
}

export let application = new App();
application.show($('body'));

//console.log('hello!');

//let headers = "License Make Model Miles".split(' ');


//let centerOfMap = {lat: 40.228932, lng: -93.584551};
//let map = new GoogleMap(centerOfMap, dataService.drones);

//map.appendToElement($('body'));

//let dt = new DataTable(headers, dataService.cars);

//dt.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));





/***** Querying and Sorting Data *****/


// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars) {
// 	$(".cars").append(car.license + "</br>");
// }


// let car = dataService.getCarByLicense('LOL123');
// console.log(car);

// for (let car of dataService.cars) {
// 	console.log('car license: ' + car.license);
// }

// for (let drone of dataService.drones)
// 	console.log('drone license: ' + drone.license);

// for (let e of dataService.errors)
// 	console.log(e.message);


