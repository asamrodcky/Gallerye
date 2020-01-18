var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/config/config.json")[env];
console.log(config);
var sequelize = new Sequelize(config);


$(document).ready(function () {

    $.get("/api/allArtwork", function (data) {

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
});