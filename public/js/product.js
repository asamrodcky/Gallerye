$(document).ready(function () {


    $('#purchase').modal('hide');

    $.ajax({

        url: "/api/product",
        method: "GET"
    })
        .then(function (res) {
            console.log(res);
            console.log(res.length);
            console.log("Attached to product.html")
        });

    $("#btn").on("click", function () {
        $('#purchase').modal('show');
    });

});
