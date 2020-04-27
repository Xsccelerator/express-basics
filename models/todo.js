const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const todo = sequelize.define('todos', {
    id: {                           //id
        primaryKey: true,           //Обычно поле ID идет со свойством primaryKey
        autoIncrement: true,        //Чтобы id сам увеличивался
        allowNull: false,           //Запрещаем чтобы данное поле было Null
        type: Sequelize.INTEGER     //Тип значения integer - целые числа
    },
    done:{                          //Мб ошибаюсь но вроде как это поле отвечает за то завершено задание или нет
        type: Sequelize.BOOLEAN,    //Флажок либо тру либо фолс
        allowNull: false            //Запрещаем чтобы данное поле было Null
    },
    title:{                         //Название, в данном случае - содержание нашего todo
        type: Sequelize.STRING,     //Тип строка
        allowNull: false            //Запрещаем чтобы данное поле было Null    
    }

})//define  - определить поле

module.exports = todo