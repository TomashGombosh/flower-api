export default (sequelize, DataTypes) => {
    const User = sequelize.define(
      'user',
      {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      {}
    );
  
    User.associate = (models) => {
        User.hasOne(models.image)
    };
  
    return User;
  };