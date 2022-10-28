import express from "express"
import cors from "cors"
import { todos } from './data';

const app = express();

app.use(express.json());

app.use(cors());


// TESTE
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

// GET TODOS BY STATUS
app.get("/todos", (req, res) => {

    const status = req.query.completed

    if (!status) {
        res.status(400).send("Coloque obrigatoriamente o status da tarefa")
    }

    const completedBoolean = (status == 'true')

    const filteredTodos = todos.filter(todo => {
        return todo.completed === completedBoolean
    })

    if (status !== 'true' && status !== 'false') {
        res.status(400).send("Coloque status como 'true' ou 'false")
    }

    res.status(200).send(filteredTodos)
})

// CREATE TODO
app.post("/todos", (req, res) => {

    const todoName = req.body.name
    const userToCreate = Number(req.headers.authorization)


    if (!todoName || !userToCreate) {
        res.status(400).send('Coloque o nome da tarefa e o id do usuario ')
    }

    const findUser = todos.find(todo => {
        return todo.userId === userToCreate
    })


    if (findUser) {
        todos.push({
            "userId": userToCreate,
            "id": Date.now(),
            "title": todoName,
            "completed": false
        })
    } else {
        res.status(404).send("Usuário não encontrado.")
    }


    res.status(200).send(todos)
})

// EDIT TODO STATUS

app.put("/todos/:todoId", (req, res) => {

    const userIdToAdd = Number(req.headers.authorization)
    const newStatus = req.body.completed
    const todoIdToAdd = Number(req.params.todoId)

    if (!newStatus || !userIdToAdd || !todoIdToAdd) {
        res.status(400).send("Coloque obrigatoriamente o id do usuário e o status da tarefa")
    }

    const completedBoolean = (newStatus == 'true')

    const todosUserArray = todos.filter(todo => {
        return todo.userId === userIdToAdd
    })

    let findTodo

    if (todosUserArray) {
        findTodo = todosUserArray.find(todo => {
            return todo.id === todoIdToAdd
        })
    } else {
        res.status(404).send('Usuário não encontrado.')
    }

    if (findTodo) {
        todos.forEach((todo, index) => {
            if (todo.id === todoIdToAdd) {
                const newTodo = { ...todo, completed: completedBoolean }
                todos.splice(index, 1)
                todos.push(newTodo)
            }
        })
    } else {
        res.status(404).send('Tarefa não encontrada para este usuário.')
    }

    if (newStatus !== 'true' && newStatus !== 'false') {
        res.status(400).send("Coloque status como 'true' ou 'false'")
    }

    const sortedTodos = todos.sort((a, b) => a.id - b.id)

    res.status(200).send(sortedTodos)
})

// DELETE TODO
app.delete("/todos/:todoId", (req, res) => {

    const userIdToDel = Number(req.headers.authorization)
    const todoIdToDel = Number(req.params.todoId)


    if (!userIdToDel || !todoIdToDel) {
        res.status(400).send("Colocar obrigatoriamente os id's do usuário e da tarefa.")
    }

    const todosUserArray = todos.filter(todo => {
        return todo.userId === userIdToDel
    })

    let findTodo

    if (todosUserArray) {
        findTodo = todosUserArray.find(todo => {
            return todo.id === todoIdToDel
        })
    } else {
        res.status(404).send('Usuário não encontrado.')
    }

    if (findTodo) {
        const finalTodos = todos.filter(todo => {
            return todo.id !== todoIdToDel
        })
        res.status(200).send(finalTodos)
    } else {
        res.status(404).send("Não há uma tarefa com o id informado.")
    }
})

// GET TODOS FROM SPECIFIC USER
app.get("/todos/:userId", (req, res) => {

    const userIdToFind = Number(req.params.userId)

    if (!userIdToFind) {
        res.status(400).send("Coloque obrigatoriamente um id.")
    }

    const findUser = todos.find(todo => {
        return todo.userId === userIdToFind
    })

    if (findUser) {
        const filteredTodos = todos.filter(todo => {
            return todo.userId === userIdToFind
        })
        res.status(200).send(filteredTodos)
    } else {
        res.status(404).send("Não há um usuário com o id informado")
    }

})




// ------------------------------------------------------------- //

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});