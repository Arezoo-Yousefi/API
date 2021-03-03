let ulElement = document.querySelector('ul');
const liElements = ulElement.children;
console.log(liElements);

while(liElements.length> 0 ){
    liItem = liElements[0];
    ulElement.removeChild(liItem);
}
console.log(liElements);