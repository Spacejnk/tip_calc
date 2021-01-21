// calculate tip
function calculateTip() {
    var billAmt = document.getElementById('billamt').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('pplsplit').value;

    // validate input
    if(billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    

    // check to see if this input is empty or less than equal to 1
    if(numOfPeople === "" || numOfPeople == 0) {
        numOfPeople = 1;
        document.getElementById('each').style.display = " none";
    } else {
        document.getElementById("each").style.display = "block";
    }


};



