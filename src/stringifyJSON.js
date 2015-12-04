// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var finalString = "";
  function makeString(item) {
  	if (item == null) finalString = finalString + "null"
  	else if (typeof item != "object") {
  		if(typeof item == "string") {
  			item = "\"" + item + "\"";
  		}
  		finalString = finalString + item;
  	}
  	else if (Array.isArray(obj)) {
  		finalString = finalString + "[";
  		_.each(obj, function(item, index) {
  			makeString(item);
  			if(index != obj.length - 1) finalString = finalString + ","
  		});
  		finalString = finalString + "]";
  	}



  };

  makeString(obj);
  return finalString;
};
