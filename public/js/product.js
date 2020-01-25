$(document).ready(function () {

    $('#paymodal').modal('hide');

    $.ajax({

        url: "/api/product",
        method: "GET"
    })
        .then(function (res) {
            console.log(res);
            console.log(res.length);
            console.log("Attached to product.html")
        });


    $("#btnBuy").on("click", function () {
        $('#paymodal').modal('show');


    });
});
