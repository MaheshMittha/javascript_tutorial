

// ? 1. getElementById


let findElementByID = document.getElementById('heading')
// console.log(findElementByID.innerHTML);
// console.log(findElementByID.innerText);
// console.log(findElementByID.textContent);

// ? 2. getElementsByClassName


let findElementByClasName = document.getElementsByClassName('list-of-nodes');
// console.log(...findElementByClasName);


// for ( let item of findElementByClasName ) {
//     console.log(item);
// }


//console.log(findElementByClasName.innerHTML);  // Undefined
//console.log(...findElementByClasName.innerHTML);  // TypeError: findElementByClasName.innerHTML is not iterable (cannot read property undefined)



// for ( let item of findElementByClasName) {
//     console.log(item.innerHTML);
//     console.log(item.innerText);
//     console.log(item.textContent);
// }


// ? 3. getElementsByTagName

let findElementbyTag = document.getElementsByTagName("li")
//console.log(findElementbyTag);


for ( let item of findElementbyTag) {
    //console.log(item);
    //console.log(item.innerHTML);
    //console.log(item.innerText);
    //console.log(item.textContent);
}


// ? 4. querySelector

const getEleemntbyQuerySelector = document.querySelector('#heading')
//console.log(getEleemntbyQuerySelector);
//console.log(getEleemntbyQuerySelector.innerHTML = "World Best Javascript");
//console.log(getEleemntbyQuerySelector.innerText = "World Best Javascript");
//console.log(getEleemntbyQuerySelector.textContent = "World Best Javascript");


// ? 5. querySelectorAll


let querySelectorAll = document.querySelectorAll('li');
//console.log(querySelectorAll);
querySelectorAll.forEach((elem , index )=> {
console.log(elem.innerHTML);
})



























































