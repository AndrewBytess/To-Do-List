function addItem(tasks){
  let li = document.createElement("li");
  let liText = document.createTextNode(tasks);
  return li.appendChild(liText)
}



function addTask() {
 let get = document.getElementById("input");
  let value = get.value ;
  const task = value;
let item = addItem(task);
  
 return  document.body.appendChild(item) 
}