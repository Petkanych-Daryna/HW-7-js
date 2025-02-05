//? Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbersArray = [1, 2, 3];
numbersArray[1] = 10
console.log(numbersArray);


//? Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const sringArray = ["Stepan", "Ivan", "Anna"]
sringArray.push("Olya")
console.log(sringArray);


//? Створити скрипт який поверне суму всіх чисел в масиві.

const arraySum = [1, 2, 3, 4, 5, 6]
let total = 0;
for (let i = 0; i < arraySum.length; i += 1) {
    total += arraySum[i];
}
console.log(total);

//? Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const arraySum1 = [1, 2, 3, 4, 5]
for (let i = 0; i < arraySum1.length; i++) {
    const element = arraySum1[i];
    console.log(element);
}

//? Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const sringArray1 = ["Stepan", "Ivan", "Anna", "Petro", "Mila"]
for (let i = 0; i < sringArray1.length; i += 1) {
    const element = sringArray1[i];
    if (element.length > 5){
        console.log(`${element} - більше 5-ти символів`);
        
    }
}

//? Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

let max = [0];
const numbersArray1 = [4, 55, 70, 32, 15, 20, 34, 11, 9, 10];
for (let i = 0; i < numbersArray1.length; i += 1) {
    if (numbersArray1[i] > max) {
        max = numbersArray1[i];
    }
}
console.log(max);


//? Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.ч

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numbersArray of numbersArray2) {
    if (numbersArray % 2 === 0 ){
        console.log(`${numbersArray} => парне`);
    }
}