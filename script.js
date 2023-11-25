function countdown() {
    const targetDate = new Date('2023-12-31T23:59:59').getTime(); // Change this date to your target date/time
    const now = new Date().getTime();
    const timeDifference = targetDate - now;
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById('countdown').innerHTML = 'Countdown expired';
    }
  }
  
  setInterval(countdown, 1000); // Update every second
  
  