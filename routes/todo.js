const {Router} = require('express')
const router = Router()
const Todos = require('../models/todo')
//Получение списка задач
router.get('/', async (req, res) =>{ //1. Для начала делаем нашу ф-ю асинхронной
    try{                                //2. Теперь используем метод findAll() чтобы получить все данные из БД
      const todos =  await Todos.findAll()           //3. Метод findAll() возвращает промис с какими-то данными
      
      res.status(200).json(todos.reverse())
      
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})


//Создание новой задачи
router.post('/', async (req, res) =>{
    try{//1. Нужно создать новый объект и сохранить его в базе данных
        //2. Обращаемся к нашей модели и вызываем метов create(), метод возвращает промис
        //3. поэтому оборачиваем функцию в конструкцию async await
        //5. далее сохраняем результат работы метода Todos.create в переменную
        const todo = await Todos.create({ 
            title: req.body.title, //4. Текст нашего todo мы получаем из req.body.title
            done: false //Передаем параметр по умолчанию, означающий что todo не выполнен
        })
        res.status(201).json({todo}) //статус 201 означает что элемент создан (по REST API)
        // Todo.build().save()  Можем создавать еще и так, т.е.
        //Сначала создаем, потом сохраняем. Но метод create() делает 
        //Делает и то и другое, так-что выберем его

    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }

})

//Изменение задачи
router.put('/:id', async (req, res) =>{
    try{
        const todo = await Todos.findByPk(+req.params.id)
        todo.done = req.body.done
        await todo.save()
        res.status(200).json({todo})
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

//Удаление задачи
router.delete('/:id', async (req, res) =>{
    try{
        const todos = await Todos.findAll({
            where:{
                id: +req.params.id
            }
        })
        todo = todos[0]
        await todos[0].destroy()
        res.status(204).json({})

    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
module.exports = router


