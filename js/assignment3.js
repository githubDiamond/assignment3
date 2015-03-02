function calcmeetings() {
    var inputDate = 0;
    var minterval = 0;
    var mnomeets = 0;
    inputDate = new Date(document.getElementById("mdate").value);
    minterval = Number(document.getElementById("interval").value);
    mnomeets =  Number(document.getElementById("nomeets").value);
    text01 = "<p>Meeting Schedue<br />Initial Meeting Date is " + inputDate + "</p>";
    
    
    //validatedate(inputDate);
    
    var count=0;
    var result= text01 + "<p>This is a list of " + mnomeets + " meetings which will occur every " + minterval + " days. </p><br /><table><tr><th>meeting #</th><th>meeting date</th></tr>";
    for (count=0; count < mnomeets; count++){
        var calcmdate=0;
        calcmdate= inputDate.toDateString(inputDate.setDate(inputDate.getDate()  + minterval));  //calculate next meeting
       result+= "<tr><td>" + (count+1) + "</td><td>" +  calcmdate + "</td></tr>"; 
    }
    result +="</table>";
    document.getElementById("displayresults").innerHTML = result;
    
    
}



function validatedate() {
    var inputDate2 = 0;
    inputDate2 = new Date(document.getElementById("mdate").value);
    var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if(inputDate2.value.match(dateformat)) {
        //document.form1.text1.focus();
        inputDate2.focus();
        //Test which seperator is used '/' or '-'
        var opera1 = inputDate2.value.split('/');
        var opera2 = inputDate2.value.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;
        // Extract the string into month, date and year
        if (lopera1>1) {
            var pdate = inputDate2.value.split('/');
            }
            else if (lopera2>1) {
            var pdate = inputDate2.value.split('-');
            }
        var mm  = parseInt(pdate[0]);
        var dd = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if (mm==1 || mm>2) {
            if (dd>ListofDays[mm-1]) {
                alert('Invalid date format!');
                return false;
            }
        }
        //leap year validation
        if (mm==2) {
            var lyear = false;
            if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear==false) && (dd>=29)) {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear==true) && (dd>29)) {
                alert('Invalid date format!');
                return false;
            }
        }
    }
    else {
        alert("Invalid date format!");
        //document.form1.text1.focus();
        return false;
    }
  }
  