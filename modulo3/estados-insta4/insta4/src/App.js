import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/id/230/50/50'}
            fotoPost={'https://picsum.photos/id/70/200/150'}
          />
          <Post
            nomeUsuario={'rafael'}
            fotoUsuario={'https://picsum.photos/id/237/50/50'}
            fotoPost={'https://picsum.photos/id/1/200/150'}
          />
          <Post
            nomeUsuario={'pedro'}
            fotoUsuario={'https://picsum.photos/id/236/50/50'}
            fotoPost={'https://picsum.photos/id/50/200/150'}
          />
  </div>
)

}


export default App;
