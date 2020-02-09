function start() {
    // Setting date
    let date = document.getElementById("date").value;
    var countDownDate = new Date(date).getTime();
    
    // Updating the countdown every second.
    var x = setInterval(function() {
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      // Time calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the countdown is over
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The date has already passed";
      }
    }, 1000);
    }

    export { start }