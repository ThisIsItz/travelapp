let x

function start() {
    // Setting date
    let date = document.getElementById("date").value;
    let countDownDate = new Date(date).getTime();
    
    // Updating the countdown every second.
    x = setInterval(function() {
      let now = new Date().getTime();
        
      let distance = countDownDate - now;
        
      // Time calculations
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
      // Output the result
      document.getElementById("countdown").innerHTML = "Your trip is " + days + " days away";
        
      // If the countdown is over
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The date has already passed";
      }
    }, 1000);
    }

    function stopTimer(){
      clearTimeout(x);
    }
    export { start, stopTimer }