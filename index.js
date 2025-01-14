// // Кинотеатр
// let age = prompt("Введите ваш возраст")
// if(age < 7) {
//     alert("Вам нельзя смотреть этот фильм.")
// }else if (age <= 17) {
//     alert("Вы можете смотреть фильм в сопровождении взрослых.")
// }else {
//     alert("Вы можете смотреть этот фильм.")
// }


// Магазин
let sum = prompt("Введите сумму покупки")
let percent = 0
if(sum >= 1000 && sum < 5000) {
    let percent = 10
    let percent_sum = sum * percent / 100
    let total_sum = sum - percent_sum
    alert(`Итоговая стоимость покупки с учётом скидки в ${percent + '%'} составляет: ${total_sum} сомов`);
}else {
    let percent = 20
    let percent_sum = sum * percent / 100
    let total_sum = sum - percent_sum

    alert(`Итоговая стоимость покупки с учётом скидки в ${percent + '%'} составляет: ${total_sum} сомов`);
}


// function calculateTotal(amount) {
//     let discount = 0; 
  
//     if (amount > 5000) {
//       discount = 20; 
//     } else if (amount > 1000) {
//       discount = 10; 
//     }

//     const discountAmount = (amount * discount) / 100;

//     const total = amount - discountAmount;
  
//     console.log(`Изначальная сумма: ${amount}`);
//     console.log(`Скидка: ${discount}%`);
//     console.log(`Сумма скидки: ${discountAmount}`);
//     console.log(`Итоговая сумма: ${total}`);
  
//     return total;
//   }

//   calculateTotal(5500); 
//   calculateTotal(1200); 
//   calculateTotal(800);  
  