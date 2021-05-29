 var currentDay = document.getElementById("currentDay")
 var today = new Date()
     // const storageInput = document.querySelector('.description')
     // const text = document.querySelector('.text')
     // const saveBtn = document.querySelector('saveBtn')

 //today's date and time
 currentDay.innerText = moment(today).format('LLLL');

 $(".saveBtn").on("click", function() {
     var text = getText(this.id);
     var time = $(this).parent().attr("id");
     localStorage.setItem(time, text);
 })

 function getText(btnID) {
     var input = document.getElementById(btnID + "-input");
     "8-9-input"
     return input.value;
 }

 //  storageInput.addEventListener('input', letter => {
 //      console.log(letter)
 //      text.textContent = letter.target.value
 //  })

 $('input[type="text"]').on('input', function(e) {
     console.log(e.originalEvent.data);
 });

 //color past, present, future
 $(function() {
     var state = true;
 })

 // var saveTasks = function() {
 //     localStorage.setItem("tasks", JSON.stringify(tasks));
 // }

 // $(".list-group").on("click", "p", function() {
 //     console.log("<p> was clicked");
 // });