$(document).ready(function () {

    var dataArr = [];

    var url = ""

    $.ajax({
        url: "/api/allArtwork/:artist",
        method: "GET",
    })
        .then(function (res) {
            console.log(res)
            var prices = ["Low to High", "High to Low"]
            var years = ["Oldest to Newest", "Newest to Oldest"]

            // For each artwork that our server sends us back:
            for (var i = 0; i < res.length; i++) {
                // NEW PARENT DIV
                var itemDiv = $("<div>");
                // Add a class and id to the Div and set id 
                itemDiv.addClass("card").attr("id", "artpiece-" + res[i].id);

                // Append parent div to container in artwork.html
                $(".artworkDiv").append(itemDiv);

                //NEW CHILD DIV
                var cardDiv = $("<div>")
                //add a class
                cardDiv.addClass("card-body")
                //create <a><img><a/>
                var anchorAndImg = $("<a id='anchor' href='/product/" + res[i].id + "'> <img class='card-img-top' id='artpiece-img-" + res[i].id + "' src='../images/IMG_" + res[i].id + ".jpg'alt='card image'> </a>")
                //append <a><img><a/> for each item
                $("#artpiece-" + res[i].id).append(anchorAndImg);
                //append Name, Year, Artist, Price, button
                cardDiv.append("<p id='card-title'>" + res[i].product_name + " (" + res[i].year + ")" + "</p>")
                cardDiv.append("<p id='card-text-artist'>" + res[i].artist + "</p>")
                // cardDiv.append("<p id='card-text-description'>" + res[i].description + "</p>")
                cardDiv.append("<p id='card-text-price'>$" + res[i].price + "</p>")
                // cardDiv.append("<a href='#' class='btn btn-primary'>Buy</a>")

                //Append child div to parent div
                itemDiv.append(cardDiv)
            }

            for (j = 0; j < prices.length; j++) {
                console.log(prices[j])
                $("#selectPrice").append('<option value="' + prices[j].split(" ").join("") + '">' + prices[j] + '</option>');
            }

            for (k = 0; k < years.length; k++) {
                console.log(years[k])
                $("#selectYear").append('<option value="' + years[k].split(" ").join("") + '">' + years[k] + '</option>');
            }

            //Show each year only once in dropdown
            //order ASC or DESC
            // if year is selected only show the cards with targeted year

            //Same with prices...




        })
        .catch(err => {
            console.log(err)
        });
    //Modal adds a customer to database
    $("#add-customer").on("click", function (event) {
        event.preventDefault();
        // Make a newCustomer object
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


