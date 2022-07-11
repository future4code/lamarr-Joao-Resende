import React, { useState } from 'react';
import Post from './components/Post/Post';
import { Form, ItemLista, MainContainer } from './style'


function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputImagemPerfil, setInputImagemPerfil] = useState("")
  const [inputImagemPost, setInputImagemPost] = useState("")

  const [posts, setPosts] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/id/230/50/50',
      fotoPost: 'https://picsum.photos/id/70/200/150'
    },
    {
      nomeUsuario: 'rafael',
      fotoUsuario: 'https://picsum.photos/id/237/50/50',
      fotoPost: 'https://picsum.photos/id/1/200/150'
    },
    {
      nomeUsuario: 'pedro',
      fotoUsuario: 'https://picsum.photos/id/236/50/50',
      fotoPost: 'https://picsum.photos/id/50/200/150'
    }
  ])

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputImagemPerfil = (e) => {
    setInputImagemPerfil(e.target.value)
  }

  const handleInputImagemPost = (e) => {
    setInputImagemPost(e.target.value)
  }

  const addPost = (e) => {
    e.preventDefault()
    const novoPost = { nomeUsuario: inputNome, fotoUsuario: inputImagemPerfil, fotoPost: inputImagemPost }
    const novaListaDePosts = [...posts, novoPost]
    setPosts(novaListaDePosts)
    setInputNome('')
    setInputImagemPerfil('')
    setInputImagemPost('')
  }

  const listaDePosts = posts.map((post, index) => {
    const deletarPost = () => {
      const novaListaDePosts = [...posts]
      const deletar = novaListaDePosts.findIndex((postExcluido) => {
        return postExcluido === post
      })
      novaListaDePosts.splice(deletar, 1)
      setPosts(novaListaDePosts)
    }
    return (
      <ItemLista key={index}>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          delet={deletarPost}
        />
      </ItemLista>
    )
  })

  return (
    <MainContainer>
      <Form>
        <div>
          <label >Nome:</label>
          <input
            placeholder='Insira o nome do perfil'
            value={inputNome}
            onChange={handleInputNome}
          />
        </div>
        <div>
          <label>Imagem do perfil:</label>
          <input
            placeholder='Insira a URL da imagem do perfil'
            value={inputImagemPerfil}
            onChange={handleInputImagemPerfil}
          />
        </div>
        <div>
          <label>Imagem do post:</label>
          <input
            placeholder='Insira a URL da imagem do post'
            value={inputImagemPost}
            onChange={handleInputImagemPost}
          />
        </div>
        <button onClick={addPost}>Adicionar</button>
      </Form>
      {listaDePosts}
    </MainContainer>
  )

}


export default App;
