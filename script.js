let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
//let selectYear = document.getElementById("Wyear").value;
//let selectMonth = document.getElementById("Wmonth").value;
//let Which_Year= document.getElementById("Wyear").submit();
var calendarbody = document.getElementById("calendar-body");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function createinp(){


   // let vardate=document.createTextNode(date);
    var input = document.createElement("input");
                input.type = "text";
                input.class="text-box "
                input.id= "table_text"
                //calendarbody.appendChild(input);
    return input ;

}


function next() {

    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    //selectYear= document.getElementById('Wyear').value;
    //alert(document.getElementById('Wyear').value);
   let selectYear = document.getElementById("Wyear").value;
   let selectMonth = document.getElementById("M_drop").value;
    //selectMonth = document.getElementById('M_drop').value;
    showCalendar(selectMonth, selectYear);
}
function jumptoday(){
	currentYear =  today.getFullYear();
    
    currentMonth = today.getMonth();
    showCalendar(currentMonth, currentYear);

}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    //filing data about month and in the page via DOM.
   monthAndYear.innerHTML = months[month] + " " + year;
    //selectwhichYear.value = whichyear;
    //selectMonth.value = currentMonth;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);;

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                cell.appendChild(createinp());
                row.appendChild(cell);
              
                date++;
            }
           // row.appendChild();

        }


        tbl.appendChild(row); 
         tbl.appendChild(row); // appending each row into calendar body.
    }
     row.appendChild(row);
    //Jquery edits 
   $(document).ready(function(){
        //make jump-to buttons disappear 
        $("#jump_submit").click(function(){

            $("#jmp_btns").fadeTo("slow",0.15 )  //slow fade out    
            currentYear =  today.getFullYear(); //on jump resets value of currentYear to today 
            currentMonth = today.getMonth();    //on jump resets value of currentMonth to today 
               })
        //make jump-to button re-appear 
        $("#shift_month_prev").click(function(){
            $("#jmp_btns").fadeTo(1); //slow fade in 
                })

        $("#shift_month_next").click(function(){
            $("#jmp_btns").fadeTo(1); //slow fade in 
              })

    })
}

