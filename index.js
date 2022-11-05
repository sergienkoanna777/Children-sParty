const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);
const buttonService = document.querySelector("#addService");
buttonService.addEventListener("click", showService);
function showService(e){
    e.preventDefault();
    options.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const childrens = document.querySelector("#childrens").value;
    const time = document.querySelector("#time").value;
    const options = document.querySelector("#options").value;
    if(childrens==="" || time===""){
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please enter your information!',
        })
    }

    let amountTotalTip = (childrens*options)*time;
    let tipPerPerson = amountTotalTip/childrens;

    amountTotalTip =amountTotalTip.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);

    document.querySelector("#totalBill").textContent = amountTotalTip;
    document.querySelector("#dividedBill").textContent = tipPerPerson;
}