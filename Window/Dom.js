

// When an web browsers loads an HTML document. It parse the HTML source code and creates an tree like structure. It is called a document object model(DOM)
// It represent. This tree represent the structure of the HTML document.
// with each HTML element being a node in the tree.


// ? ****** DOM Properties (DOM Navigation) ********** /////////////////

// 1 . DOM Navigation


// let parent = document;
// console.log(parent);


// let childBody = document.body;
// let childHead = document.head;

// let childNode =  document.body.childNodes;
// let childChildren = document.body.children;
// console.log(childNode);
// console.log(childChildren);


// ? *******  ChildNodes and Children ********** ///// 

// let bodyElement = document.body;
// let headElement = document.head;
// let bodyChild = document.body.childNodes;   // Return -  The childNodes property returns a NodeList . (DOM Tree data )
// let bodyChildNode =  document.body.children // Return -  The children property returns a collection of an element's child elements.
//console.log(bodyChild); 
//console.log(bodyChildNode); 



// ? ****** FirstChild and FirstElementChild ******* ///


// let firstChild = bodyElement.firstChild; 
// let firstElementChild = bodyElement.firstElementChild;
// console.log(firstChild);
// console.log(firstElementChild);



// let childNode =  document.body.childNodes;
// console.log(childNode);

// let childChildren = document.body.children;
// console.log(childChildren);

// let firstChild = document.firstChild;
// console.log(firstChild);

// -----------------------------------------------------------------------------------------------



// New Set 


let parent = document
let bodyElememnt = document.body  // Got Entire Body 
// let headElement = document.head; 
//console.log(bodyElememnt);
//console.log(headElement);

// let bodyChild = bodyElememnt.childNodes;
// console.log(bodyChild);

let bodyChildChildren = bodyElememnt.children; // From Body Got HTML Collection  
console.log(bodyChildChildren); 


//let firstChild = bodyElememnt.firstChild;   //   Output firstChild returns the first child node
//let lastChild = bodyElememnt.lastChild; // Output lastChild returns the last child node
let firstChild = bodyElememnt.firstElementChild; // Output  firstElementChild returns the first child element
//let lastElementChild = bodyElememnt.lastElementChild; // Output  lastElementChild returns the last child element
//console.log(lastElementChild);



// ? ****** nextSibling  and nextElementSibling ******* ///



// let nextSibling = firstChild.nextSibling; // ouyput The nextSibling property returns the next node on the same tree level.
// let nextElementSibling = firstChild.nextElementSibling; // output  The nextElementSibling property returns the next element in the same tree level.
// console.log(nextElementSibling);


// let nextSibling = firstChild.nextSibling; 
let nextElementSibling = firstChild.nextElementSibling;
// console.log(nextSibling);
console.log(nextElementSibling);


// ? ****** Previous Sibling  and nextElementSibling ******* ///


// let previousSinbling = nextElementSibling.previousSibling;
let nextElemntSibl = nextElementSibling.nextElementSibling;
console.log(nextElemntSibl);
// console.log(previousSinbling); 

















































































































