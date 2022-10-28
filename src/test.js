// Escriba una extensión para colecciones de números enteros que devuelva el número de veces que un dígito específico
// aparece en cualquiera de sus números.

// Sample input and output
// • The code [5, 15, 55, 515].challenge37(count: "5") should return 6.
// • The code [5, 15, 55, 515].challenge37(count: "1") should return 2.
// • The code [55555].challenge37(count: "5") should return 5.
// • The code [55555].challenge37(count: "1") should return 0.*/

const challenge37 = (numbers = [], count = 0) => {
	return numbers.join('').split(count).length - 1;
};

console.log(challenge37([5, 15, 55, 515], '1'));
