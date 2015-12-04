// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var finalString = "";
  function makeString(item) {
  	if (item == null) finalString = finalString + "null"
  	if (typeof item != "object") {
  		if(typeof item == "string") item = "\"" + item + "\"";
  		finalString = finalString + item;
  	}



  };

  makeString(obj);
  return finalString;
};
