// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  console.log('Class is ' + className);
  var foundElements = [];
  function findElements(element,className) {
  	if('classList' in element && element.classList.contains(className)) {
  		foundElements.push(element);
  	}
  	if(element.hasChildNodes()) {
  		var childNodes = element.childNodes;
  		_.each(childNodes, function(childNode,index) {
  			findElements(childNode, className);
  		});
  	}
  }
  findElements(document.body, className);
  console.log(foundElements);
  return foundElements
};
