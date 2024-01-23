// const key = 'myData';
// const someData = 'some data...';

// localStorage.setItem(key, someData);



// const keyJSO = 'JSON-String';
// const jsObject = { id: 1, name: 'Peter', lastname: 'John' };

// const jsonString = JSON.stringify(jsObject);

// localStorage.setItem(keyJSO, jsonString);

// const jsonGetString = localStorage.getItem(keyJSO);

// const jsObjectLocal = JSON.parse(jsonGetString);

// console.log(jsObjectLocal);



const people = [
    { index: 1, name: '1', lastname: 'Daaaaoe' },
    { index: 2, name: '2', lastname: 'Dane' },
    { index: 3, name: '3', lastname: 'Carry' }
]

const peopleKey = 'people';
localStorage.setItem(peopleKey, JSON.stringify(people));

const peopleLocal = JSON.parse(localStorage.getItem(peopleKey));
// console.log(peopleLocal);

peopleLocal.push({ index: 4, name: '4', lastname: 'Jason' });
localStorage.setItem(peopleKey, JSON.stringify(peopleLocal));
// console.log(peopleLocal);

// removeID(1);

// function removeID(index) {

//     peopleLocal.splice(peopleLocal[index], 1);
//     console.log(peopleLocal[index].name);
// }
