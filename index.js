let toy = prompt("Введите название игрушки которую хотите купить")
let toyprice = 400
let count = prompt("Сколько игрушек вы хотите купить?")
let sum = `Итоговая стоимость ${count} игрушек ${toy} составляет: ${toyprice * count} сомов`
alert(String(sum));

