// calculate tip
function calculateTip() {
    // capture all three input fields or options 
    let totalBill = document.getElementById('totalbill').value;
    let gratuity = document.getElementById('gratuity').value;
    let totalPeople = document.getElementById('pplsplit').value;

    // validate input // there has to be an amount entered in both of these fields
    if(totalBill === "" || gratuity == 0) {
        alert("Please enter values");
        return;
    }

     // function to calculate tip then divide by individuals
     let total = (totalBill * gratuity) / totalPeople;
     // round to two decimal places
     total = Math.round(total * 100) / 100;
     // next line allows us to always have two digits after decimal point
     total = total.toFixed(2);
     // Display the tip
     document.getElementById('totaltip').style.display = 'block';
     document.getElementById('tip').innerHTML = total;

    // check to see if this input is empty or less than equal to 1 // people input can be empty
    if(totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;
        document.getElementById('each').style.display = " none";
    } else {
        document.getElementById('each').style.display = "block";
    }

};

 // Hide the tip amount when load
 document.getElementById('totaltip').style.display = 'none';
 document.getElementById('each').style.display = 'none';

 // click to call  the function
 document.getElementById('calculate').onclick = function() {
     calculateTip();
 }



