import React from 'react';
import Post from './components/Post/Post';
import {ItemLista, MainContainer} from './style'


function App() {
  const arrayDeInformacoes = [
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
  ]

  const arrayDePosts = arrayDeInformacoes.map((elemento, index) => {
    return (
      <ItemLista key={index}>
        <Post
          nomeUsuario={elemento.nomeUsuario}
          fotoUsuario={elemento.fotoUsuario}
          fotoPost={elemento.fotoPost}
        />
      </ItemLista>
    )
  })

  console.log (arrayDePosts)

  return (
    <MainContainer>
      {arrayDePosts}
    </MainContainer>
  )

}


export default App;
