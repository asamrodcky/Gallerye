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
                var anchorAndImg = $("<a id='anchor' href='/product'> <img class='card-img-top' id='artpiece-" + i + "' src='../images/IMG_"+ i +".jpg'alt='card image'> </a>")
                //append <a><img><a/> for each item
                $("#artpiece-" + i).append(anchorAndImg);
                //append Name, Year, Artist, Price, button
                cardDiv.append("<p id='card-title'>" + res[i].product_name + " (" + res[i].year + ")" + "</p>")
                cardDiv.append("<p id='card-text-artist'>" + res[i].artist + "</p>")
                // cardDiv.append("<p id='card-text-description'>" + res[i].description + "</p>")
                cardDiv.append("<p id='card-text-price'>$" + res[i].price + "</p>")
                // cardDiv.append("<a href='#' class='btn btn-primary'>Buy</a>")

                //Append child div to parent div
                itemDiv.append(cardDiv)


                //Check attributes:
                // const DivForCards = document.querySelector(".artworkDiv a");
                // console.log("attributesTest", DivForCards.attributes);

                // var years = [2019, 2018, 2017, 2014, 1996, 1969, 1964, 1957,1904]

                //Append each year and price in dropdown:
                $("#selectYear").append('<option value="' + res[i].year + '">' + res[i].year + '</option>');
                $("#selectPrice").append('<option value="' + res[i].price + '">$' + res[i].price + '</option>');

                // var s = $("#selectYear").append('<option value="' + res[i].year + '">' + res[i].year + '</option>');
                // console.log(s);
            
                // var seen = {};
                // $(s).each(function () {
                //     var txt = $(this).text();
                //     if (seen[txt])
                //         $(this).remove();
                //     else
                //         seen[txt] = true;
                // });
            }

            //Show each year only once in dropdown
            //order ASC or DESC
            // if year is selected only show the cards with targeted year

            //Same with prices...




        })
        .catch(err => {
            console.log(err)
        });
});


