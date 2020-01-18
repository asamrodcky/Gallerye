$(document).ready(function () {
    console.log("Attached to artwork.html")

    $.get("/api/allArtwork", function (data) {
        // For each piece that our server sends us back
        for (var i = 0; i < data.length; i++) {
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
            cardDiv.append("<h5 class='card-title'>Card " + i + "</h5>")
            cardDiv.append("<p class='card-text'>this is the a piece of art " + i + "</p>")
            cardDiv.append("<a href='#' class='btn btn-primary'>Go somewhere</a>")
        }
    });
})