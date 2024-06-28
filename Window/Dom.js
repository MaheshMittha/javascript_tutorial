

// When an web browsers loads an HTML document. It parse the HTML source code and creates an tree like structure. It is called a document object model(DOM)
// It represent. This tree represent the structure of the HTML document.
// with each HTML element being a node in the tree.



// ? ****** DOM Properties ********** /////////////////

// 1 . DOM Navigation


// let parent = document;
// console.log(parent);


// ? *******  ChildNodes and Children ********** ///// 

let bodyElement = document.body;
let headElement = document.head;
let bodyChild = document.body.childNodes;   // Return -  The childNodes property returns a NodeList .
let bodyChildNode =  document.body.children // Return -  The children property returns a collection of an element's child elements.
//console.log(bodyChild); 
//console.log(bodyChildNode); 



// ? ****** FirstChild and FirstElementChild ******* ///


let firstChild = bodyElement.firstChild; //
let firstElementChild = bodyElement.firstElementChild;
console.log(firstChild);
console.log(firstElementChild);






























