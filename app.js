
shownotes();


let addBtn= document.getElementById('addBtn');
//console.log(addBtn);
addBtn.addEventListener("click", function(e){
    let addTxt= document.getElementById('addTxt');
    //console.log(addTxt);
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
    
})
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
notesObj.forEach(function(element, index){
    html +=`<div class=" my-2 mx-2 card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button style=" background: linear-gradient(120deg, red, yellow, rgb(204, 204, 255)); color: black "  class="btn btn-primary"> delete note</button>
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