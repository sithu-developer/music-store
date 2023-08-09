const minusButtons = document.querySelectorAll(".bi-dash-square");
const plusButtons = document.querySelectorAll(".bi-plus-square");
const totalAmountQnt = document.querySelector(".totalAmountQnt");
const qtnDetail = document.querySelectorAll(".qtn");


let amount = 0;
totalAmountQnt.append(amount);
let detailAmount = 0;

for (let i = 0 ; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", () => {
        amount += 1;
        totalAmountQnt.innerHTML = "";
        totalAmountQnt.append(amount);
        
        if (qtnDetail[i].textContent == 0) {
            detailAmount = 0;
            detailAmount += 1;
            qtnDetail[i].innerHTML = "";
            qtnDetail[i].append(detailAmount);
            
        } else {
            let originalQtn =parseInt(qtnDetail[i].textContent) ;
           let currentQtn = originalQtn + 1;
           qtnDetail[i].innerHTML = "";
           qtnDetail[i].append(currentQtn);

        }
    })

    minusButtons[i].addEventListener("click", () => {
        if (qtnDetail[i].textContent == 0) {
            
            return;
        } 
            let originalQtn =parseInt(qtnDetail[i].textContent)
            let currentQtn = originalQtn - 1;
            qtnDetail[i].innerHTML = "";
            qtnDetail[i].append(currentQtn);


            amount -= 1;
            totalAmountQnt.innerHTML = "";
            totalAmountQnt.append(amount);
   
    })
}

