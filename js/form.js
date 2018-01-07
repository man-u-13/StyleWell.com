(function(){ 
  var form = document.getElementById('submit');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.name.value;          // Select username entered
    var msg      = 'Thanx ' + name;            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());