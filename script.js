function addItem(tasks){
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let liText = document.createTextNode(tasks);
  li.appendChild(liText)
  ul.appendChild(li); 
  return  ul.appendChild(li)
}



function addTask() {
 let get = document.getElementById("input");
  let value = get.value ;
  const task = value;
let item = addItem(task);
  
 return  document.body.appendChild(item) 
}