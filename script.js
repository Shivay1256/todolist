const list = document.getElementById("list");
const btn = document.getElementById("btn");
document.getElementById("item").addEventListener("keypress",function(e){
    if(e.key==='Enter')
    {
        additem()
    }
})
btn.addEventListener("click",additem);
function additem(){
    let item = document.getElementById("item");
    let itemvalue = item.value;
    if(itemvalue!="")
    {
        let li=document.createElement("li")
    li.innerHTML=`<span>${itemvalue}</span><button class="del" onclick="deleteitem(this)">Remove</button>`
    list.appendChild(li)
    item.value=""
    }
    else{
        alert("Enter Something To Add")
    }
}
function deleteitem(i)
{
    i.parentElement.remove()
}