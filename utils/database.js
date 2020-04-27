//Здесь мы пишем конфигурацию для базы данных
const Sequelize = require('sequelize')    //Подключаем модуль
const DB_NAME = 'node-todo' //Передаем название базы данных, созданной в WorkBanch
const USER_NAME = 'root' //Передаем логин к базе данных, созданной в WorkBanch
const PASSWORD = 'mypass12345' //Передаем пароль к базе данных, созданной в WorkBanch
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
host: 'localhost', //В экземпляр класса sequelize нужно передавать
//в строковом формате ("имя базы данных", "логин", "пароль", {объект с опциями})
dialect: 'mysql'
}) 


module.exports = sequelize