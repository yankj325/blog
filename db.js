var Sequelize=require('sequelize');
var CONFIG=require('./config');
var sequelize=new Sequelize(
    CONFIG.MYSQL.database,
    CONFIG.MYSQL.username,
    CONFIG.MYSQL.password,{
        host:CONFIG.MYSQL.host,
        dialect:'mysql',
        logging:CONFIG.DEBUG?console.log:false,
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        timezone:'+08:00'
    }

);

module.exports=sequelize;
