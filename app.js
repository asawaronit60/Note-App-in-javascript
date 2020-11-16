var addbtn = document.getElementById("add_btn");

addbtn.addEventListener("click", function () {

var addtext = document.getElementById("new_note");

var notes = localStorage.getItem("notes");

  if (notes == null) {

    var  notesobj = [];
  }
  else {
   
    notesobj = JSON.parse(notes);
  
  }

  notesobj.push(addtext.value);

  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtext.value = "";
  console.log(notesobj);

showNotes();

});// add btn 

//function to display note
 function showNotes() {

  var html = " ";
  let notes = localStorage.getItem("notes");
  if (notes == null) {

    notesobj = [];   
   
  }
  else {
    notesobj = JSON.parse(notes);
  }

  notesobj.forEach(function (element, index) {

html+= '<div class="note_card" id = "fordel"><div ><h5 class="note_title">'+"Note " + (index +1) +'</h5><p class="card_text">'+ element+' </p><button class="btn btn-danger mt-3" id= '+(index)+' onClick = "deleteNote(this.id)" style = "margin:110px 0px 5px 0px;">Delete Note</button></div></div> '; 

 });

  if (notesobj.length != 0){ 
   document.getElementById("notes").innerHTML = html;
  }
 else if(notesobj===""){
    console.log("please type a note ") ;
  }
}

//function to delete a note
function deleteNote(index){

console.log("i am deleting " + index);
var notes = localStorage.getItem("notes");

if (notes == null) {

  var  notesobj = [];
  
}
else {
 
notesobj = JSON.parse(notes);
}
notesobj.splice(index,1);
if(index == 0){
  document.getElementById("notes").innerHTML= "";
}
localStorage.setItem("notes", JSON.stringify(notesobj));

showNotes();
}



$("textarea").on("mouseenter",function(){

  $("textarea").addClass("text_hover");
})

$("textarea").on("mouseleave",function(){

  $("textarea").removeClass("text_hover");

})
 
search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
  
  let input_val = search.value;
  
  let notecard =  document.getElementsByClassName("note_card");

  Array.from(notecard).forEach(function(element){
 
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
   
    if(cardTxt.includes(input_val)){
      element.style.display = "inline-block";
    }else{
      element.style.display = "none";
    }

 })
  
  console.log("event fired" ,input_val);
});

function deleteAll(){
 console.log(localStorage.clear());
  document.getElementById("notes").style.display = "none";
  location.reload();

 
}