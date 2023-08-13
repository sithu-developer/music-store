const minusButtons = document.querySelectorAll(".bi-dash-square");
const plusButtons = document.querySelectorAll(".bi-plus-square");
const totalAmountQnt = document.querySelector(".totalAmountQnt");
const qtnDetail = document.querySelectorAll(".qtn");
const backet = document.querySelector(".bi-cart3");
const selectedItemsContainer =  document.querySelector(".selectedItemsContainer");
const eachDiv1 = document.createElement("div");
const eachDiv2 = document.createElement("div");
const eachDiv3 = document.createElement("div");

let amount = 0;
totalAmountQnt.append(amount);
let detailAmount = 0;

for (let i = 0 ; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", (event) => {
        // for amonut of items
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
        //for selected item list 
         if(event.target.id == "plus1") {            
            eachDiv1.innerHTML = "";
            let text = document.createTextNode("Guitar");
            let copiedAmount = qtnDetail[0].innerHTML;
            addSelectedDiv(text,copiedAmount,eachDiv1);        
         } else if (event.target.id == "plus2") {
            eachDiv2.innerHTML = "";
            let text2 = document.createTextNode("Drum Set");
            let copiedAmount2 = qtnDetail[1].innerHTML;
            addSelectedDiv(text2,copiedAmount2,eachDiv2);
         } else {
            eachDiv3.innerHTML = "";
            let text3 = document.createTextNode("Bass Guitar");
            let copiedAmount3 = qtnDetail[2].innerHTML;
            addSelectedDiv(text3,copiedAmount3,eachDiv3);
         }
    })


    minusButtons[i].addEventListener("click", (event) => {

        // total amount of items
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
        
        //for selected item list 
        if (event.target.id == "minus1") {
            eachDiv1.innerHTML = "";
            let text = document.createTextNode("Guitar");
            let copiedAmount = qtnDetail[0].innerHTML;
            addSelectedDiv(text,copiedAmount,eachDiv1);
        } else if(event.target.id == "minus2") {
            eachDiv2.innerHTML = "";
            let text2 = document.createTextNode("Drum Set");
            let copiedAmount2 = qtnDetail[1].innerHTML;
            addSelectedDiv(text2,copiedAmount2,eachDiv2);
        } else {
            eachDiv3.innerHTML = "";
            let text3 = document.createTextNode("Bass Guitar");
            let copiedAmount3 = qtnDetail[2].innerHTML;
            addSelectedDiv(text3,copiedAmount3,eachDiv3);
        }

        if (event.target.id == "minus1" && qtnDetail[i].textContent == 0 ) {
            eachDiv1.innerHTML = "";
            eachDiv1.remove();
        } else if(event.target.id == "minus2" && qtnDetail[i].textContent == 0) {
            eachDiv2.innerHTML = "";
            eachDiv2.remove();
        } else if(event.target.id == "minus3" && qtnDetail[i].textContent == 0){
            eachDiv3.innerHTML = "";
            eachDiv3.remove();
        }

    })

}

let addSelectedDiv = (text,copiedAmount,eachDiv ) => {
    let div1 = document.createElement("div");
    div1.append(text);
    let eachAmountDiv = document.createElement("div");
    eachAmountDiv.append(copiedAmount);
    eachDiv.classList.add("selectedEachDiv");
    eachDiv.append(div1,eachAmountDiv);
    selectedItemsContainer.append(eachDiv);

}
// selected div 
let counter = 0;
backet.addEventListener("click", () => {
    if (counter == 0 ) {
        selectedItemsContainer.classList.add("appearSelectedList");
        counter = 1;
    } else {
        selectedItemsContainer.classList.remove("appearSelectedList");
        counter = 0;
    }
})

