export default (sequelize, DataTypes) => {
    const Image = sequelize.define(
      'image',
      {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        data: DataTypes.BLOB("long"),
      },
      {}
    );
  
    Image.associate = (models) => {
      Image.belongsTo(models.user,  {foreignKey: 'userId', as: 'user'})
    };
  
    return Image;
  };