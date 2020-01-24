$(document).ready(function () {

    $.ajax({
        url: "/api/product/:id",
        method: "GET"
    })
        .then(function (res) {
            console.log(res);
            console.log(res.length);
            console.log("Attached to product.html")
        });

});
