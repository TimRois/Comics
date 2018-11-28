module.exports = (connect) => {
    
    const Available_comic_strip = connect.sequelize.define('available_comics', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        number_available_comic_strip: {
            type: connect.Sequelize.INTEGER,
            unique:true
        },
    });

    return Available_comic_strip
};