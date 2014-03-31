//FoodItemController.js
'use strict';


// reference module
FoodItemApp.controller('FoodItemController',
	function FoodItemController($scope){

		$scope.FoodItems = {};

		(function initializeFoodItem(){

			var tempFI = FoodItem.Factory.Create();
			tempFI.name = 'Milk';
			tempFI.tags = ['Healthy', 'Staple'];
			tempFI.description = "Ehh ... You have it with cereal?"

			tempFI.Image = 'Images/milkGlass.jpg';


			var tempNT = FoodItem.NutritionalData();	
				tempNT.Calories.value = '360';
				tempNT.CaloriesFromFat.value = '420';
				tempNT.TotalFat.value = '28 g';
				tempNT.SaturatedFat.value = '16 g';
				tempNT.TransFat.value = '3.5 g';
				tempNT.Cholesterol.value = '1.25 g';
				tempNT.Sodium.value = '7 g';
				tempNT.TotalCarbohydrates.value = '14 g';
				tempNT.Fiber.value = '2 g';
				tempNT.Sugars.value = '28 g';
				tempNT.Proteins.value = '32 g';
				tempNT.Vitamins.value = {'Vitamin A' : '4%', 'Vitamin B12' : '35%'};

				tempFI.NutritionalData = tempNT;


			$scope.FoodItems[tempFI.FactoryId] = tempFI;
			// .... 

		}());
	}
);