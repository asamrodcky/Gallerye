$(document).ready(function () {

    var dataArr = [];

    $.ajax({
        url: "/api/allArtwork",
        method: "GET",

    })
        .then(function (res) {
            // console.log(res)
            // console.log(res.length)
            // console.log("Attached to artwork.html")

            // For each artwork that our server sends us back:
            for (var i = 0; i < res.length; i++) {

                // NEW PARENT DIV
                var itemDiv = $("<div>");
                // Add a class and id to the Div and set id 
                itemDiv.addClass("card").attr("id", "artpiece-" + i);

                // Append parent div to container in artwork.html
                $(".artworkDiv").append(itemDiv);

                //NEW CHILD DIV
                var cardDiv = $("<div>")
                //add a class
                cardDiv.addClass("card-body")
                //create <a><img><a/>
                var anchorAndImg = $("<a id='anchor' href='/product/:id'> <img class='card-img-top' src='...' alt='card image'> </a>")
                //append <a><img><a/> for each item
                $("#artpiece-" + i).append(anchorAndImg);
                //append Name, Year, Artist, Price, button
                cardDiv.append("<p id='card-title'>" + res[i].product_name + " (" + res[i].year + ")" + "</p>")
                cardDiv.append("<p id='card-text-artist'>" + res[i].artist + "</p>")
                cardDiv.append("<p id='card-text-price'>$" + res[i].price + "</p>")
                // cardDiv.append("<a href='#' class='btn btn-primary'>Buy</a>")

                //Append child div to parent div
                itemDiv.append(cardDiv)

                //Console log attirbutes for each anchor in main container 
                // const DivForCards = document.querySelector(".artworkDiv a");
                // console.log("attributesTest", DivForCards.attributes);

                //Append each year in dropdown:
                $("#selectYear").append('<option value="' + res[i].year + '">' + res[i].year + '</option>');
        
            }


        })
        .catch(err => {
            console.log(err)
        });
});


