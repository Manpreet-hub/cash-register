const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const cashGivendiv=document.querySelector(".cash-input");
const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#chk");
const noOfNotes = document.querySelectorAll(".no-Of-Notes");
const returnChange = document.querySelector(".return-change");
const errmessage = document.querySelector("#error-message");

const clearInput=document.querySelector("#clear-input");



const availableNotes = [2000, 500, 100, 20, 10, 5, 2, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  clearOfNotes();
  errmessage.style.display = "none";

  let billAmountValue = Number(billAmount.value);
  let cashGivenValue = Number(cashGiven.value);

  if (billAmount.value > 0 ) {   
    if (billAmountValue > cashGivenValue) {
      showMessage("It is less value than bill amount");
      return;
    }
    calcualteNotesValue(billAmountValue, cashGivenValue);
  } 
  else {
    showMessage("Invalid amount");
  }
});

function calcualteNotesValue(bill, cash) {
  let returnAmt = cash - bill;

  if (returnAmt < 1) {
    showMessage("No cash need to be returned");
    return;
  }
  returnChange.style.display = "block";

  for (let i = 0; i < availableNotes.length; i++) {
    returnAmt = compareAmt(returnAmt, availableNotes[i], i);
  }
}

function compareAmt(remainder, noteAmt, index) {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);
    remainder = remainder - notes * noteAmt;
    noOfNotes[index].innerText = `${notes}`;
  }
  return remainder;
}

function clearOfNotes() {
 for (let notes of availableNotes) notes.innerText = "";
}

function showMessage(msg) {
  errmessage.style.display = "block";
  errmessage.innerText = msg;
}


nextBtn.addEventListener("click", ()=>{
    errmessage.style.display="none";
    if(billAmount.value > 0){
        nextBtn.style.display="none";
        cashGivendiv.style.display="block";
    }
    else{
        showMessage("Please enter valid bill amount");
    }
});

clearInput.addEventListener("click",()=>{
    location.reload();
})