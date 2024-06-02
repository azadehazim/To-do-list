
let allTasksArray=[];
let completedTasksArray=[];


let count=0;

document.querySelector('#input').addEventListener('change',function(){
    count++;
    let input = this.value;
    let li=`<li id=li${count} class="inputTasks">` + input + `<i class="fas fa-check" data-id=${count}></i> <i class="fas fa-trash" data-id=${count}></i> </li>`;
    this.value="";
    document.querySelector(".inputUl").innerHTML+=li;
    
    let liOnly=`<li id=liOnly${count} class="inputTasks">` + input + `</li>`;
    //console.log(li);
    allTasksArray.push(liOnly);
    //console.log(allTasksArray);
    
});


document.addEventListener("click",checkHandler);


function checkHandler(event){
    //console.log(event.target.className);
    let selectedCheckID=event.target.dataset.id;
    let selectedLi=document.getElementById("li"+selectedCheckID);

    if(event.target.className==="fas fa-check"){

        //console.log("hi");

        selectedLi.classList.remove("inputTasks");
        selectedLi.classList.add("checked");
        //console.log(selectedLi);

        completedTasksArray.push(selectedLi);
        //console.log(completedTasksArray);
        
    }


    else if(event.target.className==="fas fa-trash"){
        //console.log("bye");

        selectedLi.classList.remove("inputTasks");

        selectedLi.classList.add("trashed");
        

        selectedLi.addEventListener('transitionend', () =>{
            selectedLi.remove();
            selectedLi.classList.remove("trashed");
        });

    }

}




//document.getElementById("allTasks").addEventListener("click",showAllTasks(allTasksArray));

function showAllTasks(){
    document.querySelector(".allTasksUl").innerHTML="";
    //document.querySelector(".inputUl").style.display="none";
    allTasksArray.forEach(item => document.querySelector(".allTasksUl").innerHTML+=item);
    document.getElementById("sectionHeader").innerText="All Tasks";
    //console.log("show");
}

function showCompletedTasks(){
    document.querySelector(".allTasksUl").innerHTML="";
    document.getElementById("sectionHeader").innerText="Completed Tasks";

    completedTasksArray.forEach(item => {
        let completedLi=document.createElement("li");
        completedLi.innerText=item.innerText;
        completedLi.classList.add("completedTasksLi")
        document.querySelector(".allTasksUl").appendChild(completedLi);
    });
}
