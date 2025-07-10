const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./Post');

const PostMedia = sequelize.define('PostMedia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  media_type: {
    type: DataTypes.ENUM('image', 'video'),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'post_media',
  timestamps: false
});

PostMedia.belongsTo(Post, { foreignKey: 'post_id' });
Post.hasMany(PostMedia, { foreignKey: 'post_id' });

module.exports = PostMedia;