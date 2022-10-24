


// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// 1. создать переменную в ней достукаться до id и узнать сколько детей li у ul*************************(3)
// 2. вывести в консоль номер категорий  ul = 3 
// 3. создать переменную массив для h2 - названий категорий title в который войдут все title************concat 
// 4. создать переменную массив для li эллемента  - в кототрый так же войдут все li ********************сoncat
// 5. перебрать массив title for each по value и index стрелочная функция 
// 6. вывести в консоль так: Categories: Elements 




const ul = document.querySelector('#categories').children.length;
console.log('Number of categories:', ul); 

const titels = [].concat(...document.querySelectorAll('h2'));

const items = [].concat(...document.querySelectorAll('li>ul'));

titels.forEach((value, index) => {
    console.log(`Category: ${value.textContent} 
    Elements: ${items[index].children.length}`);
});
    
