
shownotes();


let addBtn= document.getElementById('addBtn');
//console.log(addBtn);
addBtn.addEventListener("click", function(){
    let addTxt= document.getElementById('addTxt');
     console.log(addTxt);
     let len=addTxt.value.length;
     console.log(len);

    if(len === 0){
        alert("please write something in the text box first!!");
    }

    else{
     let notes= localStorage.getItem('notes');
     //console.log(notes);
     if(notes=== null) {
        
        notesObj=[];
        
     }
     else{
        notesObj=JSON.parse(notes);
         
     }
     notesObj.push(addTxt.value);
     localStorage.setItem("notes", JSON.stringify(notesObj));
     addTxt.value="";
     console.log(notesObj);
     shownotes();
    }
    
});
function shownotes(){
    let notes= localStorage.getItem('notes');
     //console.log(notes);
     if(notes=== null) {
        
        notesObj=[];
        
     }
     else{
        notesObj=JSON.parse(notes);
         
     }

let html="";
notesObj.forEach(function(element, index,title){
    html +=`<div class=" notecard my-2 mx-2 card "  style="width:18rem; background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color:black;">
    <h5 class="card-title"> title</h5>
    <p class="cardtext"  style="background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color:black;">${title}</p>
    <div class="card-body "  style="background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color:black;">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="cardtext"  style="background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color:black;">${element}</p>
        <button  id="${index}" onclick="deleteNote(this.id)"   class="btn btn-primary" style="background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color:black;"> delete note</button>
    </div>
</div>`;

});
let notesElm = document.getElementById('notes');
if(notesObj.length != 0){
    notesElm.innerHTML=html;
}
else{
    notesElm.innerHTML=`<h4>Nothing to show yet! use  above add a note section to add new notes and enjoy the app</h4>`
}
}

//function to delete a note 
function deleteNote(index){
    console.log("i am deleting",index);
    let notes= localStorage.getItem('notes');
     //console.log(notes);
     if(notes=== null) {
        
        notesObj=[];
        
     }
     else{
        notesObj=JSON.parse(notes);
         
     }
     notesObj.splice(index,1);
     localStorage.setItem("notes", JSON.stringify(notesObj));
     shownotes();
        
}
// for serching
let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let input=document.getElementById('searchtxt').value;
    input=input.toLowerCase();
    let x=document.getElementsByClassName('notecard');
    for(i=0;i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
 x[i].style.display="none";
        }
        else{
            x[i].style.display="block";
        }
    }

});




























