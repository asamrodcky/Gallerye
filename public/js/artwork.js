$(document).ready(function () {

    var dataArr = [];

    // $('.card-img-top').on('click', function () {
    //     $('#anchor').attr('href', '/views/product.html')
    // })

    $.ajax({
        url: "/api/allArtwork",
        method: "GET",

    })
        .then(function (res) {
            console.log(res)
            // console.log(res.length)
            // dataArr = artData
            console.log("Attached to artwork.html")

            // For each piece that our server sends us back
            for (var i = 0; i < res.length; i++) {
                // Create a parent div to hold piece data
                var itemDiv = $("<div>");
                // Add a class to this div
                itemDiv.addClass("card");
                // Add an id 
                itemDiv.attr("id", "artpiece-" + i);
                // Append the item to the container section
                $(".artworkDiv").append(itemDiv);
                // Now  we add our book data to the well we just placed on the page
                var img = $("<img class='card-img-top' src=${} alt='Card image cap'>")

                $("#artpiece-" + i).append(img)


                // cardDiv.prepend('<img id="theImg" src=' + res[i].img  + '/>')

                var cardDiv = $("<div>")
                cardDiv.addClass("card-body")
                // cardDiv.append(`<img class='card-img-top' src=${products.imgUrl} alt='product.title'>`)
                cardDiv.append("<a id='anchor' href='/product/:id'> <img class='card-img-top' src='images/IMG_001.jpg'  alt='image' /></a>")
                // <img src="<%= product.imageUrl %>" alt="<%= product.title %>">
                cardDiv.append("<p id='card-title'>" + res[i].product_name + " (" + res[i].year + ")" + "</p>")
                cardDiv.append("<p id='card-text-artist'>" + res[i].artist + "</p>")
                cardDiv.append("<p id='card-text-price'>$" + res[i].price + "</p>")
                // cardDiv.append("<a href='#' class='btn btn-primary'>Go somewhere</a>")

                itemDiv.append(cardDiv)

                $(".container").append(itemDiv);
            }
        })
        .catch(err => {
            console.log(err)
        });

   

});

