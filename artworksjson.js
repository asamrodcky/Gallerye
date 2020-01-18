
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/config/config.json")[env];
console.log(config);
var sequelize = new Sequelize(config);
var dataArr = [
    {

        "product_name": "Banana Comedy",
        "artist": "Maurizio Cattelan",
        "year": " 2019",
        "description": "A Chinese copy of a famous banana",
        "price": "2000"
    },
    {

        "product_name": "Frida Bigotes",
        "artist": "Benjamin Uribe",
        "year": " 2019",
        "description": "The result of leaving your son with the refrigerator’s magnets.",
        "price": "2300"
    },
    {

        "product_name": "W is for \"WHEEL\"",
        "artist": "Benjamin Uribe",
        "year": " 2019",
        "description": "An art piece from the producer’s son.",
        "price": "2700"
    },
    {

        "product_name": "Indi Cigarette",
        "artist": "Raffici Delutte",
        "year": " 1957",
        "description": "An original flyer for an extinct cigarette label. Made out of Clay.",
        "price": "700"
    },
    {

        "product_name": "Pokemon Chandelier",
        "artist": "Eduardo Larreamendy",
        "year": "1904",
        "description": "The oldest of Pokemons, Chandisse is the Pokemon of fire! Made with magic and ceramic.",
        "price": "12800"
    },
    {

        "product_name": "Robotte",
        "artist": "Daniel Satient",
        "year": "2018",
        "description": " No3 of Daniel’s robot collection, Sarient’s drawing represents sadness.",
        "price": "5000"
    },
    {

        "product_name": "Coca-Cola Vase",
        "artist": "Ai Weiwei",
        "year": "2014",
        "description": "Hand painted logo on Han dynasty vase (206 BC-220 AD)",
        "price": "423000"
    },
    {

        "product_name": "Brillo Box",
        "artist": "Andy Warhol",
        "year": "1964",
        "description": "Hand painted wood sculpture",
        "price": "423000"
    },
    {

        "product_name": "New York Garbage",
        "artist": "Arman",
        "year": "1969",
        "description": "Trash",
        "price": "500000"
    },
    {

        "product_name": "Silk Scarf Sleeping Bags",
        "artist": "Simon Denny",
        "year": "2019",
        "description": "Silk scarf from Margaeth Tatcher sew on Patagonia sleeeping bags",
        "price": "60000"
    },
    {

        "product_name": "Chanel Chain Saw",
        "artist": "Tom Sachs",
        "year": "1996",
        "description": "Cardboard and Thermal Adhesive",
        "price": "on request"
    },
    {

        "product_name": "MTA : Always Moving",
        "artist": "Jackie Pierson",
        "year": "2017",
        "description": "Illustration",
        "price": "1000"
    },
    {

        "product_name": "What We Throw Away",
        "artist": "Jackie Pierson",
        "year": "2017",
        "description": "Sculpture",
        "price": "10000"
    },
    {

        "product_name": "Distant Lands",
        "artist": "Jackie Pierson",
        "year": "2017",
        "description": "Scupture",
        "price": "5000"
    },
    {

        "product_name": "FEMPOWERMENT ",
        "artist": "Jackie Pierson",
        "year": "2017",
        "description": "Drawing on paper",
        "price": "1000"
    }
];

var products = sequelize["import"]('models/products.js');

for (var i = 0; i < dataArr.length; i++) {
    console.log(dataArr[i]);
    products.create(dataArr[i])
}