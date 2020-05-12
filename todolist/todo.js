function addItem(){
    var ul = document.getElementById("list");
    var input = document.getElementById("input");
    var x = document.createElement("INPUT");
    var deleteButton = document.createElement('button');
    deleteButton.innerText="Delete";
	deleteButton.className="delete";
    
    if(input.value.length == 0){
        alert("Please add task!!!");
    }else{
        var li = document.createElement("li");
        li.setAttribute('id',input.value);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        document.getElementById('input').value = '';
        x.setAttribute("type", "checkbox");
        li.appendChild(x);
 
        li.appendChild(deleteButton);
        delete_Task(li);
    }  
}
var delete_Task=function(taskListItem){
	var deleteButton=taskListItem.querySelector("button.delete");
			deleteButton.onclick=deleteTask;
}

var deleteTask=function(){
    var li=this.parentNode;
    var ul=li.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(li);
}