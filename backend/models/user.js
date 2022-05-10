module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    saldo: DataTypes.DECIMAL(4, 2),
    role: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: "users",
    underscored: true
  });

  return user;
};