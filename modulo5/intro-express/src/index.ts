import express from "express"
import cors from "cors"
import { users } from './data';

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// TESTE
app.get("/", (req, res) => {
    res.send("Hello from Express")
})

// REQUISIÇÃO PARA RETORNAR OS USUÁRIOS
app.get("/users", (req, res) => {
    const showUsers = users.map(user => {
        return user
    })
    res.status(200).send(showUsers)
})

// REQUISIÇÃO PARA RETORNAR OS POSTS
app.get("/posts", (req, res) => {
    const showPosts = users.map(user => {
        return user.posts
    })
    res.status(200).send(showPosts)
})

// REQUISIÇÃO PARA RETORNAR POSTS DE UM USUÁRIO
app.get("/users/:id/posts", (req, res) => {
    const userId = Number(req.params.id)

    if (!userId) {
        res.status(400).send("Colocar obrigatoriamente um id")
    }

    const findUser = users.find(user => {
        return user.id === userId
    })

    if (findUser) {
        const showPosts = findUser.posts.map(post => {
            return post
        })
        res.status(200).send(showPosts)
    } else {
        res.status(404).send("Não há um usuário com o id informado")
    }
})

// REQUISIÇÃO PARA DELETAR UM POST
app.delete("/posts/:id", (req, res) => {
    const postId = Number(req.params.id)

    if (!postId) {
        res.status(400).send("Colocar obrigatoriamente um id")
    }

    const showPosts = users.map(user => {
        return user.posts
    })

    const findPost = showPosts[0].find(post => {
        return post.id === postId
    })

    if (findPost) {
        const finalPosts = showPosts[0].filter(post => {
            return post.id !== postId
        })
        res.status(200).send(finalPosts)
    } else {
        res.status(404).send("Não há um post com o id informado")
    }
})

// REQUISIÇÃO PARA DELETAR UM USUÁRIO
app.delete("/users/:id", (req, res) => {
    const userId = Number(req.params.id)

    if (!userId) {
        res.status(400).send("Colocar obrigatoriamente um id")
    }

    const findUser = users.find(user => {
        return user.id === userId
    })

    if (findUser) {
        const finalUsers = users.filter(user => {
            return user.id !== userId
        })
        res.status(200).send(finalUsers)
    } else {
        res.status(404).send("Não há um usuário com o id informado")
    }
})

