$(document).ready(function () {

    var dataArr = [];

    $.ajax({
        url: "/api/allArtwork",
        method: "GET",

    })
        .then(function (res) {
            console.log(res)
            console.log(res.length)
            // dataArr = artData
            console.log("Attached to artwork.html")

            // For each piece that our server sends us back
            for (var i = 0; i < res.length; i++) {
                // Create a parent div to hold piece data
                var itemDiv = $("<div>");
                // Add a class to this div: 'well'
                itemDiv.addClass("card");
                // Add an id to the well to mark which well it is
                itemDiv.attr("id", "artpiece-" + i);
                // Append the item to the container section
                $(".artworkDiv").append(itemDiv);

                // Now  we add our book data to the well we just placed on the page
                var img = $("<img class='card-img-top' src='...' alt='Card image cap'>")

                $("#artpiece-" + i).append(img)

                var cardDiv = $("<div>")
                cardDiv.addClass("card-body")
                cardDiv.append("<h5 class='card-title'>" + res[i].product_name + "</h5>")
                cardDiv.append("<h6 class='card-text'>" + res[i].artist + "</h6>")
                cardDiv.append("<p class='card-text'>" + res[i].year + ", " + res[i].description + "</p><br>")
                cardDiv.append("<p class='card-text'>$ " + res[i].price + "</p>")
                cardDiv.append("<a href='#' class='btn btn-primary'>Go somewhere</a>")

                itemDiv.append(cardDiv)

                $(".container").append(itemDiv)
            }
        })
        .catch(err => {
            console.log(err)
        });
})

