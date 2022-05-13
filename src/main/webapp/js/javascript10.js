const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i=0; i<numbers.length; i++) {
	sum += numbers[i];
}
console.log(sum);

sum = 0;
function total(n) {
	sum += n;
}
numbers.forEach(total);
console.log(sum);

sum = 0;
numbers.forEach(function (n) {
	sum+= n;
});
console.log(sum);

sum = 0;
numbers.forEach(n => sum+= n);
console.log(sum);
console.log('1. ===========================================');

//	배열.reduce(function(accumulator[, currentValue, currentIndex, array]) {
//		실행할 문장;
//		...;
//		return 값; // 앞에 실행한 return값이 다음 실행의 accumulator에 저장된다.
//	}, accumulator의 초기치);

//	배열.reduce((accumulator, currentValue, currentIndex, array) => {
//		실행할 문장;
//		...;
//		return 값;
//	}, accumulator의 초기치);

//	accumualator: 연산 결과가 저장될 기억장소
//	accumualator의 초기치를 생략하면 reduce() 함수가 실행되는 배열의 0번쨰 index 값이 초기치로 저장된다.
//	currentValue: reduce() 함수가 실행되는 배열의 값이 차례대로 넘어와 저장되는 변수
//	currentIndex: currentValue로 넘어오는 값의 index가 저장되는 변수
//	array: reduce() 함수가 실행되는 배열 자신을 의미한다.

sum = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
	console.log(accumulator, currentValue, currentIndex, array);
	return accumulator + currentValue;
}, 0);
console.log(sum);
console.log('2. ===========================================');

sum = numbers.reduce((accumulator, currentValue) => {
	console.log(accumulator, currentValue);
	return accumulator + currentValue;
}, 0);
console.log(sum);
console.log('3. ===========================================');

sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
console.log('4. ===========================================');

const numbers2 = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];

let count = 0;
for (let i=0; i<numbers2.length; i++) {
	if (numbers2[i] > 10) {
		count++;
	}
}
console.log(count);

function tenOverNumber(numbers) {
	let count = 0;
	numbers.forEach(n => {
		if (n > 10) {
			count++;
		}
	});
	return count;
}
count = tenOverNumber(numbers2);
console.log(count);






















