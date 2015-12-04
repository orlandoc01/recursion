// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


function stringifyJSON(item) {
	if (item == null) return "null";
  	else if (typeof item != "object") {
  		if(typeof item == "string") return "\"" + item + "\"";
  		else return "" + item;
  	}
  	else if (Array.isArray(item)) {
  		var finalString = "[";
  		_.each(item, function(val, index) {
  			finalString = finalString + stringifyJSON(val);
  			if(index != item.length - 1) finalString = finalString + ","
  		});
  		return finalString + "]";
  	}
  	else if (typeof item == "object") {
  		var finalString = "{";
  		var NonEmptyObject = false;
  		_.each(item, function(value, key, collection) {

  			NonEmptyObject = true;
  			finalString = finalString + stringifyJSON(key) + ":" + stringifyJSON(value) + ",";
  		});
  		if(NonEmptyObject) finalString = finalString.slice(0,finalString.length - 1);
  		finalString = finalString + "}";
  		return finalString
  	}
  };

