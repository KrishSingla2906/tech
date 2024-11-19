document.getElementById('Booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Booking confirmed for ' + document.getElementById('name').value);
    this.reset(); 
});