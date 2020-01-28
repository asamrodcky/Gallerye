$(document).ready(function () {
  //SCRIPT CAROUSEL
  // Activate Carousel
  $("#carouselExampleSlidesOnly").carousel({ interval: 3500 });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  //SCRIPT MODAL
  $("#sign").on('click', function () {
    $('.modal').modal('show');
  });


  var newCustomer = {}

  //Modal adds a customer to database
  $("#add-customer").on("click", function (event) {
    event.preventDefault();

    // Make a newBook object
    newCustomer = {
      first_name: $("#firstname").val().trim(),
      last_name: $("#lastname").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim()

    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/customer", newCustomer)
      // On success, run the following code
        .then(function(res){
          if(res["Error"])
          alert(res["message"])
        })

    document.cookie = "email=" + newCustomer.email
    document.cookie = "signedIn=true"

    // Empty each input box by replacing the value with an empty string
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#password").val("");

    // Close modal after completion
    $('.modal').modal('hide');

    // Reload page
    window.location.reload()
    console.log(newCustomer)
  });

  if (document.cookie.split("; ")[1] === "signedIn=true") {
    $(".navbar-nav").append(
      `<li class='nav-item'>
      <a class='nav-link' href='/sell'> Sell </a>
      </li>
      <li class='nav-item dropdown'>
      <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown'
      data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Account </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/account">Account</a>
        <a class="dropdown-item" id='logOut' href="/">Logout</a>
      </div>
      </li>`)

    $("#logOut").on("click", function () {
      alert("You have successfully logged out")
      document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "signedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
  }
  else {
    $(".navbar-nav").append(
      `<li class='nav-item'>
        <a class='nav-link' id='sign' href='#'>Sign Up/Log In</a>
        </li>`)
    $("#sign").on('click', function () {
      $('.modal').modal('show');
    });
  }

  console.log(document.cookie.split("; "))

});
