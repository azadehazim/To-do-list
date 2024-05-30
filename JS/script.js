


let count=0;

document.querySelector('#input').addEventListener('change',function(){
    count++;
    let input = this.value;
    let li=`<li id=li${count}>` + input + `<i class="fas fa-check" data-id=${count}></i> <i class="fas fa-trash" data-id=${count}></i> </li>`;
    this.value="";
    document.querySelector("ul").innerHTML+=li;
    
});


document.addEventListener("click",checkHandler);


function checkHandler(event){
    //console.log(event.target.className);
    let selectedCheckID=event.target.dataset.id;
    let selectedLi=document.getElementById("li"+selectedCheckID);

    if(event.target.className==="fas fa-check"){

        console.log("hi");
        
        selectedLi.classList.add("checked");
        
    }


    else if(event.target.className==="fas fa-trash"){
        console.log("bye");

        selectedLi.classList.add("trashed");
        selectedLi.addEventListener('transitionend', () => selectedLi.remove());

    }

}
