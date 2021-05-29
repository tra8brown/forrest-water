 var currentDay = document.getElementById("currentDay")
 var today = new Date()

 //displays today's date and time
 currentDay.innerText = moment(today).format('LLLL');
 var hour = moment().hours()
 console.log(hour)
     //entering an event displays
 $(".saveBtn").on("click", function() {
     var timeblock = $(this).attr("id").split("-")[0]
     var userEntry = $("#" + timeblock + "-input").val()
     localStorage.setItem(timeblock, userEntry);
 })

 //localStorage displays
 function getText(btnID) {
     var input = document.getElementById(btnID + "-input");
     return input.value;
 }

 $('input[type="text"]').on('input', function(e) {
     console.log(e.originalEvent.data);
 });

 //color past, present, future
 $(function() {
     var state = true;
 })

 for (let i = 8; i < 18; i++) {
     $("#" + i + "-input").val(localStorage.getItem(i))
     if (i > hour) {
         $("#" + i + "-input").addClass("future")
     } else if (i == hour) {
         $("#" + i + "-input").addClass("present")
     } else {
         $("#" + i + "-input").addClass("past")
     }
 }

 var saveTasks = function() {
     localStorage.setItem("tasks", JSON.stringify(tasks));
 }
 saveTasks()