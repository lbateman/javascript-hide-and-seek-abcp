function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedListItems = document.querySelectorAll(".ranked-list li");
  var i;
  
  for (i = 0; i < rankedListItems.length; i++) {
    var innerNum = parseInt(rankedListItems[i].innerHTML);
    innerNum = innerNum + n;
    rankedListItems[i].innerHTML = innerNum.toString();
  }
}

function deepestChild() {
	var i; // index variable
	var current = document.querySelectorAll("div"); // selects all divs in the document; could be generalized to all elements, i guess
	var next = []; // empty array to push elements into so we can pop them back off onto current
	
	// run a loop to copy all contents of current (object) into next (array)
	for (i = 0; i < current.length; i++) {
		next.push(current[i]);
	}

	// pop off elements till we get to #grand-node
	while (current.id != "grand-node") {
		current = next.shift();
	}
	
	// as long as there's something in next, pop it into current
	while (next.length > 0) {
		current = next.shift();
	}

	// once we're down to next.length = 0, return whatever is in current
	return current;
}