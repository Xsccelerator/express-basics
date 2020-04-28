const {Router} = require('express')
const router = Router()
const Todos = require('../models/todo')
//Получение списка задач
router.get('/', async (req, res) =>{ 
    try{                                
      const todos =  await Todos.findAll()          
      
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
    try{
        const todo = await Todos.create({ 
            title: req.body.title, 
            done: false 
        })
        res.status(201).json({todo}) 
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


