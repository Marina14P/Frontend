// Задание 1 //

function countArrayElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(element => {
        if (typeof element === 'number' && !isNaN(element)) { // проверка, что элемент - это число
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Четных элементов: ${evenCount}`);
    console.log(`Нечетных элементов: ${oddCount}`);
    if (zeroCount > 0) {
        console.log(`Нулевых элементов: ${zeroCount}`);
    }
}

// Пример вызова функции
const arr = [1, 2, 0, null, 'a', 3, 4, 0, 5, undefined, NaN, 6];
countArrayElements(arr);


// Задание 2 //

function isPrimeNumber(num) {
    if (num > 1000) {
        return "Данные неверны";
    }
    if (num <= 1) {
        return "Число не является простым";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Число не является простым";
        }
    }
    return "Число является простым";
}

// Пример вызова функции
console.log(isPrimeNumber(29));    // Число является простым
console.log(isPrimeNumber(15));    // Число не является простым
console.log(isPrimeNumber(1001));  // Данные неверны
console.log(isPrimeNumber(1));     // Число не является простым
console.log(isPrimeNumber(0));     // Число не является простым


// Задание 3 //

function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

// Пример вызова функции
const addFive = createAdder(5);
console.log(addFive(10));  // 15

const addTen = createAdder(10);
console.log(addTen(25));  // 35


// Задание 4 //

function printNumbersInterval(start, end) {
    let current = start;

    const intervalId = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId); // Остановка интервала, когда текущее число достигает конца диапазона
        }
        current++;
    }, 1000); // Интервал в 1 секунду (1000 миллисекунд)
}

// Пример вызова функции
printNumbersInterval(5, 15);


// Задание 5 //

const power = (x, n) => {
    return x ** n;
};

// Пример вызова функции
console.log(power(2, 3));  // 8
console.log(power(5, 4));  // 625
console.log(power(10, 2)); // 100

