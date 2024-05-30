


let count=0;

document.querySelector('#input').addEventListener('change',function(){
    count++;
    let input = this.value;
    let li=`<li id=li${count}>` + input + `<i class="fas fa-check" data-id=${count}></i> <i class="fas fa-trash"></i> </li>`;
    this.value="";
    document.querySelector("ul").innerHTML+=li;
    
});


document.addEventListener("click",checkHandler);


function checkHandler(event){
    //console.log(event.target.className);
    if(event.target.className==="fas fa-check"){
        //console.log("hi");
        let selectedCheckID=event.target.dataset.id;
        //console.log(selectedLi);
        let selectedLi=document.getElementById("li"+selectedCheckID);
        //console.log(selectedLi);
        selectedLi.classList.add("checked")
        
    }
    else if(event.target.className==="fas fa-trash"){
        console.log("bye");
    }
}