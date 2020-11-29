/*Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) 
и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const ordered = 50;*/

const total = 100;
const ordered = 50;
let orderedChangable = 20;

console.log('------------------task2 start-------------------');

console.log(`Default condition: total=${total}; ordered=${ordered}:`);
let message = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

console.log(`If ordered=${orderedChangable}:`)
message = orderedChangable > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

orderedChangable = 80;
console.log(`If ordered=${orderedChangable}:`)
message = orderedChangable > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

orderedChangable = 130;
console.log(`If ordered=${orderedChangable}:`)
message = orderedChangable > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

console.log('------------------task2 end---------------------');