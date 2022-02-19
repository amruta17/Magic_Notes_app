
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

    
})