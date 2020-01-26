$(document).ready(function () {
    //SCRIPT MODAL
    $("#sign").on('click', function () {
      $('.modal').modal('show');
    });
     //Modal adds a customer to database
  $("#add-customer").on("click", function (event) {
    event.preventDefault();
    // Make a newBook object
    var newCustomer = {
      first_name: $("#firstname").val().trim(),
      last_name: $("#lastname").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim()

    };
    // Send an AJAX POST-request with jQuery
    $.post("/api/customer", newCustomer)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        console.log(data);
      });
    // Empty each input box by replacing the value with an empty string
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#password").val("");
  });
});