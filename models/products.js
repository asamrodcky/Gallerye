module.exports = function (sequelize, DataTypes) {
  var Products = sequelize.define("Products", {

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        len: [1]
      },
    },
    sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
   
  
  Products.associate = function (models) {
    Products.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Products;
};
