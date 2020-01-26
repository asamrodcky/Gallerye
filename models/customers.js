module.exports = function (sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "1234",
      validate: {
        len: [4]
      }
    }
  });

  // Customers.associate = function (Models) {
  //   Customers.hasMany(Models.Products, {
  //     onDelete: "cascade"
  //   });
  // };

  return Customers;
};
