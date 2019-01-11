// JavaScript Document

// get elements

//feedback message above form
const alert = document.getElementById("alert");
//form
const form = document.getElementById("form");
// input box for text
const inputfield = document.getElementById("inputfield");
//add item button
const additem = document.getElementById("additem");
// the list area 
const listarea = document.getElementById("listarea");
//the clear button at the bottom
const clear = document.getElementById("clear");
//form
const list = document.getElementById("demo");

//getting the value from the inputfield.

const textValue = inputfield.value;
// sets entry to an to an li element
const entry =  document.createElement('li');

	//delete button
const deletebutton = document.createElement("BUTTON", {"id":"dbutton"},{"class":"dbutton"},{"type":"button"});
const dbuttontext = document.createTextNode("DELETE")
deletebutton.appendChild(dbuttontext);
deletebutton.setAttribute("class", "dbutton");
	
	//edit button
const editbutton = document.createElement("BUTTON", {"id":"ebutton"},{"class":"ebutton"},{"type":"button"});
const ebuttontext = document.createTextNode("EDIT")
editbutton.appendChild(ebuttontext);
deletebutton.setAttribute("class", "ebutton");

//item data
let itemData = [];

//form submission

//.event default prevents the page from reloading when the form is submitted

additem.addEventListener("click", function(event){
	event.preventDefault();
	
	//delete button Included in event listner because  the additem evetn listener has prevetn default
const deletebutton = document.createElement("BUTTON", {"id":"dbutton"},{"type":"button"});
const dbuttontext = document.createTextNode("DELETE")
deletebutton.appendChild(dbuttontext);
deletebutton.preventDefault;
deletebutton.setAttribute("class", "dbutton");
deletebutton.addEventListener("click", function(){
	list.removeChild(entry);
})
	
	//edit button Included in event listner because  the additem evetn listener has prevetn default
const editbutton = document.createElement("BUTTON", {"id":"ebutton"},{"type":"button"});
const ebuttontext = document.createTextNode("EDIT")
editbutton.appendChild(ebuttontext);
editbutton.setAttribute("class", "ebutton");
	editbutton.addEventListener("click", function(){
	list.li.inputfield.value = "";
})
	



	
//getting the value from the inputfield.

const textValue = inputfield.value;
// sets entry to an to an li element
const entry =  document.createElement('li');

//adds the text value of the inputfield as a child of li element
entry.setAttribute("class", "item")
entry.appendChild(document.createTextNode(textValue)); 

entry.appendChild(deletebutton);


//if there is nothing written in the input field shows error messaage.
	if(inputfield.value === ''){
		alert.className = 'showitem';
	} else { //if there is content to the input field keeps the classname the same and adds the entry which is the li element that has the value of the input field ad its  content.
	alert.className = 'alert';
	list.appendChild(entry);
		//clearing the input field
	inputfield.value = "";
	
	};
	
	
	

});

//clear button

$("#clear").click(function(){
	$("#demo").empty();
});


















