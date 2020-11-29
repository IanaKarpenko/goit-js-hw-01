/*Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя 
запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в 
message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message 
строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;*/

console.log('------------------task3 start-------------------');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const passwordEntered = prompt('Введите пароль:');

if (passwordEntered !== null) {
    if (passwordEntered === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
        alert(message);
    } else {
        message = 'Доступ запрещен, неверный пароль!';
        alert(message);
    }
} else {
    message = 'Отменено пользователем!';
    alert(message);
}

console.log(`Task3 completed with following alert: ${message}`)

console.log('------------------task3 end---------------------');