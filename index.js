const checkBox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCard");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function (){
     if(checkBox.checked){
         subResult.textContent = 'u subscribed';
     }else{
         subResult.textContent = 'u not subscribed';
     }

     if(visaBtn.checked){
         paymentResult.textContent = 'u paying with visa';
     }else if(masterCard.checked){
         paymentResult.textContent = 'u paying with masterCard';
     }else if(payPalBtn.checked){
         paymentResult.textContent = 'u paying with payPalBtn';
     }else{
         paymentResult.textContent = 'u must select a payment type';
     }
}






