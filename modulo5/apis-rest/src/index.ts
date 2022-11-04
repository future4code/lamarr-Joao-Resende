import express from "express";
import cors from "cors";
import { users } from './data';
import * as type from './types';

const app = express();

app.use(express.json());

app.use(cors());

// GET USERS

app.get("/users", (req, res) => {

    let errorCode = 400
    const userType = req.query.type as string
    const userName = req.query.name as string

    try {

        let userSearched: type.User[]

        if (userType && userName) {
            userSearched = users.filter((user) => {
                return user.type === userType.toUpperCase() && user.name.toLowerCase() === userName.toLowerCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (userType) {
            userSearched = users.filter((user) => {
                return user.type === userType.toUpperCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (userName) {
            userSearched = users.filter((user) => {
                return user.name.toLowerCase() === userName.toLowerCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (!userName && !userType) {
            const showUsers = users.map(user => {
                return user
            })
            res.status(200).send(showUsers)
        }
    } catch (e: any) {
        res.status(errorCode).send(e.message)
    }


})

// CREATE USER

app.post("/users", (req, res) => {

    let errorCode = 400
    const userName = req.body.name
    const userType = req.body.type
    const userEmail = req.body.email
    const userAge = req.body.age

    try {
        if (!userName && !userType && !userEmail && !userAge) {
            errorCode = 422
            throw new Error("O nome, tipo, email e idade do usuário não foram informados!");
        }
        if (!userName) {
            errorCode = 422
            throw new Error("O nome do usuário não foi informado!");
        }
        if (!userType) {
            errorCode = 422
            throw new Error("O tipo do usuário não foi informado!");
        }
        if (!userEmail) {
            errorCode = 422
            throw new Error("O email do usuário não foi informado!");
        }
        if (!userAge) {
            errorCode = 422
            throw new Error("A idade do usuário não foi informada!");
        }
        if (typeof userName !== "string") {
            errorCode = 422
            throw new Error("O nome do usuário deve ser do tipo string!");
        }
        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 422
            throw new Error("O tipo do usuário deve ser 'ADMIN' ou 'NORMAL'!");
        }
        if (typeof userEmail !== "string") {
            errorCode = 422
            throw new Error("O email do usuário deve ser do tipo string!");
        }
        if (typeof userAge !== "number") {
            errorCode = 422
            throw new Error("A idade do usuário deve ser do tipo number!");
        }
        if (userAge <= 0) {
            errorCode = 422
            throw new Error("A idade do usuário deve ser maior que 0!");
        }

        users.push({
            id: users[users.length - 1].id + 1,
            name: userName,
            email: userEmail,
            type: userType,
            age: userAge
        })

        res.status(201).send(users)
    } catch (e: any) {
        res.status(errorCode).send(e.message)
    }
})


// // TESTE
// app.get("/test", (req, res) => {
//     res.send("Servidor está rodando na porta http://localhost:3003.")
// })

// // CREATE PRODUCT
// app.post("/products", (req, res) => {

//     const productName = req.body.name
//     const productPrice = req.body.price

//     try {

//         if (!productName && !productPrice) {
//             const erro = new Error("O nome e o preço do produto não foram informados!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (!productName) {
//             const erro = new Error("O nome do produto não foi informado!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (!productPrice) {
//             const erro = new Error("O preço do produto não foi informado!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (typeof productName !== "string") {
//             const erro = new Error("O nome do produto deve ser do tipo string!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (typeof productPrice !== "number") {
//             const erro = new Error("O preço do produto deve ser do tipo number!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (productPrice <= 0) {
//             const erro = new Error("O preço do produto deve ser maior que 0!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }

//         products.push({
//             id: (Number(products[products.length - 1].id) + 1).toString(),
//             name: productName,
//             price: productPrice
//         })

//         res.status(201).send(products)
//     } catch (e: any) {
//         if (e.name === "invalidParameter") {
//             res.status(422).send(e.message);
//         } else {
//             res.status(500).send(e.message);
//         }
//     }
// })

// // GET ALL PRODUCTS
// app.get("/products", (req, res) => {

//     const searchedProduct = req.query.search

//     try {
//         if (searchedProduct) {
//             const filteredProducts = products.filter(product => {
//                 return product.name === searchedProduct
//             })
//             res.status(200).send(filteredProducts)
//         } else {
//             const erro = new Error("O nome do produto é inválido!");
//             erro.name = "invalidName";
//             throw erro;
//         }

//         const showProducts = products.map(product => {
//             return product
//         })
//         res.status(200).send(showProducts)
//     } catch (e: any) {
//         if (e.name === "invalidName") {
//             res.status(422).send(e.message);
//         } else {
//             res.status(500).send(e.message);
//         }
//     }
// })

// // EDIT PRODUCT PRICE
// app.put("/products/:id", (req, res) => {

//     const productId = req.params.id
//     const newPrice = req.body.price
//     const newName = req.body.name

//     try {
//         if (newPrice <= 0) {
//             const erro = new Error("O preço do produto deve ser maior que 0!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (!newName && !newPrice) {
//             const erro = new Error("Informe pelo menos o nome ou o preço do produto!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (newPrice && typeof newPrice !== "number") {
//             const erro = new Error("O preço do produto deve ser do tipo number!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }
//         if (newName && typeof newName !== "string") {
//             const erro = new Error("O nome do produto deve ser do tipo string!");
//             erro.name = "invalidParameter";
//             throw erro;
//         }

//         const findProduct = products.find(product => {
//             return product.id === productId
//         })

//         if (findProduct) {
//             if (!newName) {
//                 products.forEach((product, index) => {
//                     if (product.id === productId) {
//                         const newProduct = { ...product, price: newPrice }
//                         products.splice(index, 1, newProduct)
//                     }
//                 })
//             } else if (!newPrice) {
//                 products.forEach((product, index) => {
//                     if (product.id === productId) {
//                         const newProduct = { ...product, name: newName }
//                         products.splice(index, 1, newProduct)
//                     }
//                 })
//             } else {
//                 products.forEach((product, index) => {
//                     if (product.id === productId) {
//                         const newProduct = { ...product, name: newName, price: newPrice }
//                         products.splice(index, 1, newProduct)
//                     }
//                 })
//             }
//         } else {
//             const erro = new Error("Produto não encontrado!");
//             erro.name = "productNotFound";
//             throw erro;
//         }

//         res.status(200).send(products)
//     } catch (e: any) {
//         switch (e.name) {
//             case "invalidParameter":
//                 res.status(422).send(e.message);
//                 break;
//             case "productNotFound":
//                 res.status(404).send(e.message);
//                 break;
//             default:
//                 res.status(500).send(e.message);
//         }
//     }

// })

// // DELETE PRODUCT
// app.delete("/products/:id", (req, res) => {

//     const productIdToDel = req.params.id

//     try {
//         const findProduct = products.find(product => {
//             return product.id === productIdToDel
//         })

//         if (findProduct) {
//             const finalProducts = products.filter(product => {
//                 return product.id !== productIdToDel
//             })
//             res.status(200).send(finalProducts)
//         } else {
//             const erro = new Error("Produto não encontrado!");
//             erro.name = "productNotFound";
//             throw erro;
//         }
//     } catch (e: any) {
//         if (e.name === "productNotFound") {
//             res.status(404).send(e.message);
//         } else {
//             res.status(500).send(e.message);
//         }
//     }

// })


// ------------------------------------------------------------- //

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});