document.write (`1. Выведите числа от 1 до 50 и от 35 до 8. <hr>`)

for (let i = 1; i <= 50; i++) document.write(`${i} `);
document.write(`<hr>`);
for (let i = 35; i >= 8; i--) document.write(`${i} `);
document.write(`<hr> <br>`);

// Задание 2 
document.write (`2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом br друг от друга, чтобы получить столбец, а не строку <br><br>`);

let q = 89;
while (q >= 11) {
  document.write(q + `<br/>`)
  --q
}

// Задание 3
document.write(`<br> 3. С помощью цикла найдите сумму чисел от 0 до 100. <br>`);

let sum = 0; 

for (i = 0; i <= 100; i++) {
  sum += i;
} 
document.write(sum + `<br/>`);

// ЗАДАние 4
document.write(`<br> 4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3). <br>`);

let a = 5;

for (i = 1; i <= a; i++) {
  sumOfNumbers = 0;
  for( j = 1; j <= i; j++) {
  sumOfNumbers += j;
  }
  document.write(`В числе ${i} сумма составляет: ${sumOfNumbers} <br/>`);
}

// Задание 5
document.write(`<br> 5. Выведите чётные числа от 8 до 56. Решить задание через while и for. <br>`);
document.write(`<br/> Решение через while : <br/>`)

let z = 8; 
while (z <= 56) {
  if (z % 2 == 0) {
    document.write(`${z} `);
  }  
  z++
}

document.write(`<br/> Решение через for : <br/>`)

for (i = 8; i <= 56; i++) {
  if (i % 2 == 0) document.write(`${i} `)
}

// Задание 6
document.write(`<br><br> 6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) c использованием вложенных циклов. <br/>`); 

for (let i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++){
    prod = i * j;
      document.write(`${i} * ${j} = ${prod} <br/>`);
  }
}

// Задание 7
document.write(`<br><br> 7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
для этого (итерация - это проход цикла), и запишите его в переменную num.`); 

let n = 1000, 
    num = 0;

while (n > 50) {
  n /= 2
  num++
}
document.write(`<br> Результат деления = ${n}. Количество итераций ${num}`)

// Задание 8
document.write(`<br><br> 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение. <br/>`); 

let number,
    totalAmount = 0,
    i1 = 0,
    average;

while(true) {
  number = +prompt('Введите число', '');
  totalAmount += number
  i1++
  average = totalAmount / (i1 - 1)
  if (number == 0 && number == '') {
    alert('Было введено не число, либо 0!');
    console.log(totalAmount);
    console.log(average);
    break;
  } 
}