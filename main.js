let form=document.getElementById("my-form");
form.addEventListener("submit",add);
ul=document.getElementById("line")
function add(e){
    e.preventDefault()
    let name=document.getElementById("name").value
    let expense=document.getElementById("expense").value;
    let description=document.getElementById("description").value;
    let category=document.getElementById("category").value;
    // since local storage stores data in form a string
    let userObj=JSON.stringify({
        expense:expense,
        description:description,
        category:category
    })
    localStorage.setItem(`${name}`,userObj);
    show(name,expense,description,category)
    form.reset();

}

function show(name,expense,description,category){
    let li=document.createElement('li');
    li.textContent=`Rs ${expense}-${description}-${category}`
    let del=document.createElement("button");
    let edit=document.createElement("button");
    del.textContent="Delete";
    edit.textContent="Edit";
    del.setAttribute("id",`${name}`);
    edit.setAttribute("id",`${name}`);
    // adding event listeners
    del.addEventListener("click",delt);
    edit.addEventListener("click",editt);
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);

}

// function for delete
function delt(e){
    localStorage.removeItem(`${e.target.id}`)
    ul.removeChild(e.target.parentNode);
}
function editt(e){
    let userObj=JSON.parse(localStorage.getItem(`${e.target.id}`))
    document.getElementById("name").value=e.target.id;
    document.getElementById("expense").value=userObj.expense;
    document.getElementById("description").value=userObj.description;
    document.getElementById("category").value=userObj.category;
    localStorage.removeItem(`${e.target.id}`)
    ul.removeChild(e.target.parentNode);
}
// function for edit