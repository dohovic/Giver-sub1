var tasks=[];

function addTask(e) {
    console.log(e);
    
    let container = document.getElementById("tasks");
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','tasks[]');
    input.setAttribute('placeholder','add task');
    container.appendChild(input);
}
