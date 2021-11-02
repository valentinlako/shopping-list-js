var sendButton = document.getElementById("send");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var classLi = document.getElementsByTagName("li");

var empty = document.createElement("p");
		empty.appendChild(document.createTextNode("The list is empty. Write something and press 'send'"));
		empty.id = "emptyList";

emptyList();

function toggleDone(element) {
	if (element.target.tagName === "LI"){
		element.target.classList.toggle("done");
	}
};
function inputLength() {
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
  //add button to new tasks
  	var myBtn = document.createElement("button");
		myBtn.innerHTML = "Delete";
 	  li.appendChild(myBtn);
	  myBtn.addEventListener("click", removeLi);
	}
function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
		if (classLi.length < 2){
		  	emptyList();
		  }
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
			if (classLi.length < 2){
		  	emptyList();
		}
	}
}
function addBtnToList(){ 
	for (var i=0;i<classLi.length;i++) {
    	var myBtn = document.createElement("button");
			myBtn.innerHTML = "Delete";
	    classLi[i].appendChild(myBtn);
	    myBtn.addEventListener("click", removeLi);
	}
}
function removeLi() {
	  	this.closest("li").remove();
	  if (classLi.length < 1) {
	  	emptyList();
	  }
	 }
function emptyList() {
	//add text is there is no entry
			if (classLi.length < 1) {
				ul.append(empty);
			} else {
					document.getElementById("emptyList").remove();
		}
}

addBtnToList();

sendButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

