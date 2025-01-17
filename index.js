// Кинотеатр
let age = prompt("Введите ваш возраст")
if(age < 7) {
    alert("Вам нельзя смотреть этот фильм.")
}else if (age <= 17) {
    alert("Вы можете смотреть фильм в сопровождении взрослых.")
}else {
    alert("Вы можете смотреть этот фильм.")
}


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

  