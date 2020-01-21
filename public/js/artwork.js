



$(document).ready(function () {

    var dataArr = [];

    $.ajax({
        url: "/api/allArtwork",
        method: "GET",
        data: artData
    })
        .then(function () {
            dataArr = artData
        })
        .catch(err => {
            console.log(err)
        });


    $(function () {
        function renderTemplates(dataArr) {
            for (var i = 0; i < dataArr.length; i++) {
                var data = dataArr[i];
                var page = $("<div>")
                    .addClass("itemTemplateWrapper")
                    .append($("<img>").attr("src", data.image).css('width', '200px'))
                    .append($("<p>").text(data.title))
                    .append($("<p>").text(data.artist))
                    .append($("<p>").text(data.year))
                    .append($("<p>").text(data.description))
                    .append($("<p>").text(data.price))

                $("#container").append(page);
            }
        };
        // window.addEventListener("load", renderTemplates)
        renderTemplates(dataArr);
    });

});

$(document).ready(function () {
    console.log("Attached to artwork.html")

    // $.get("/api/allArtwork", function (data) {
    //     // For each piece that our server sends us back
    //     for (var i = 0; i < data.length; i++) {
    //         // Create a parent div to hold piece data
    //         var itemDiv = $("<div>");
    //         // Add a class to this div: 'well'
    //         itemDiv.addClass("card");
    //         // Add an id to the well to mark which well it is
    //         itemDiv.attr("id", "artpiece-" + i);
    //         // Append the item to the container section
    //         $(".artworkDiv").append(itemDiv);

    //         // Now  we add our book data to the well we just placed on the page
    //         var img = $("<img class='card-img-top' src='...' alt='Card image cap'>")

    //         $("#artpiece-" + i).append(img)

    //         var cardDiv = $("<div>")
    //         cardDiv.addClass("card-body")
    //         cardDiv.append("<h5 class='card-title'>Card " + i + "</h5>")
    //         cardDiv.append("<p class='card-text'>this is the a piece of art " + i + "</p>")
    //         cardDiv.append("<a href='#' class='btn btn-primary'>Go somewhere</a>")
    //     }
    // });
})
