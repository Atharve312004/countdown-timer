var inuser = window.prompt("Pls Enter the valid date with time")
const endDate = inuser;

document.getElementById('endDate').innerText = endDate;
const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; 

    if(diff<0) return
    //convert into days
    input[0].value = Math.floor(diff/3600/24);
    //convert into hours
    input[1].value = Math.floor(diff/3600)%24;
    //convert into minutes
    input[2].value = Math.floor(diff/60)%60;
    //convert inot second 
    input[3].value = Math.floor(diff%60);

}

setInterval(() => {
    clock()
}, 1000);
