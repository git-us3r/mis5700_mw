'use strict';

var FoodItem = (function(){


	var that = {};


		//FoodItem.js

	var StoreLocation = function(args){

		return {

			StreetAddress : ': string',
			City : ': string',
			State : ': string',
			Country : ': string',
			ZipCode : ': string'

		};
	};




	// Uses location
	var StoreInfo = function(_args){

		return {

			Name : ': string',
			StoreLocation : ': object: Common.Location',
			Phone : ': string',
			WebAddress : ': string'
		};
	};




	var ShoppingInfo = function(){

		return {
			Stores : ': object: <key/value>: <key: Store / value: price>'
		};
	};





	var NutritionalData = function(){

		return {

			Calories : {name: 'Calories', value: ': number'},
			CaloriesFromFat: {name: 'CaloriesFromFat', value : ': number'},
			TotalFat: {name: 'TotalFat', value : ': number'},
			SaturatedFat: {name: 'SaturatedFat', value : ': number'},
			TransFat: {name: 'TransFat', value : ': number'},
			Cholesterol: {name: 'Cholesterol', value : ': number'},
			Sodium: {name: 'Sodium', value : ': number'},
			TotalCarbohydrates: {name: 'TotalCarbohydrates', value : ': number'},
			Fiber: {name: 'Fiber', value : ': number'},
			Sugars: {name: 'Sugars', value : ': number'},
			Proteins: {name: 'Proteins', value : ': number'},
			Vitamins: {name: 'Vitamins', value : ': {}'}
		};
	}




	var Availability = function(){


		return {

			ServingsRemaining : ': number',
			ExpirationDate : ': Common.Date'
		};
	}




	var Factory = (function(){


		var factory = {},
			uniqueId = 0;


		function create(FoddItemParameters){


			var item = {}; 

			item.FactoryId = uniqueId;
			item.Image = ': Image';
			item.Tags = ': [string]';
			item.Name = ': string';
			item.ShoppingInfo = ': FoodItem.ShoppingInfo';
			item.Description = ': string';
			item.NutritionalData = ': FoodItem.NutritionalData';
			item.Availablility = ': Common.Availability';


			uniqueId++;


			// Expose the FindRecipes method.
			item.FindRecipes = FindRecipes;
			return item;
		}



		// TODO
		function FindRecipes(){

			// Return a list of all Recipes associated with this food item.
			// Q: where are they?
			// Q: what interface do they provide?
		}
			

		// Expose the create function.
		factory.Create = create;
		return factory;
	}());


	// Expose the Factory member, which has the Create method.
	that.Factory = Factory;
	that.ShoppingInfo = ShoppingInfo;
	that.Availability = Availability;
	that.NutritionalData = NutritionalData;
	that.StoreInfo = StoreInfo;
	that.StoreLocation = StoreLocation;
	return that;


}());