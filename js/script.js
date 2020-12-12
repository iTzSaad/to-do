// Function called while clicking add button 
function add_item() { 

    // Getting box and ul by selecting id; 
    let item = document.getElementById("box"); 
    let list_item = document.getElementById("list_item"); 
    if(item.value != ""){ 
    
        // Creating element and adding value to it 
        let make_li = document.createElement("LI"); 
        let makeDeleteButton = document.createElement("button");
    
        make_li.appendChild(document.createTextNode(item.value)); 
        makeDeleteButton.className = "delete-button";
        makeDeleteButton.innerHTML = "❌";
    
        // Adding li to ul 
        list_item.appendChild(make_li); 
        list_item.appendChild(makeDeleteButton);
    
        // Reset the value of box 
        item.value=""

        make_li.onclick = function(){ 
            make_li.style.textDecoration = "line-through";
        } 
            
        // Delete a li item on click 
        makeDeleteButton.onclick = function(){ 
            make_li.parentNode.removeChild(make_li);    
            makeDeleteButton.parentNode.removeChild(makeDeleteButton); 
        } 

    } 
    else{ 
    
        // Alert msg when value of box is "" empty. 
        alert('Error! "add a value"'); 
    } 
    
    } 
    