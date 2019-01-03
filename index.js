// /* Write a function that takes an array of integers as an input and
// then outputs the first duplicate */

// let array = [1, 2, 3, 4, 5, 5, 3, 7, 8];

// function hasDuplicate() {
//     let array2 = [];
//     for (let i = 0; i < array.length; i++) {
//         for (var j = i+1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 console.log('Duplicate found! The first duplicate number is ' + array[j]);
//                 return;
//             }
//         }
//     }
//     console.log('There were no duplicates! Here is the array!');
// }

// hasDuplicate();


var firstDup = function(arr){

	var dupArr = [];

	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (dupArr[val]) {
			console.log(val);
		}
		else{
			dupArr[val] = true;
		}
	}
}


firstDup([1, 2, 3, 4, 2, 3, 4, 4]);