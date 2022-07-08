import React, { useState } from 'react'
import { PostContainer, PostHeader, PostFooter, PostPhoto, UserPhoto, UserProfile, DivComentario } from './style'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import iconeMarcacaoBranco from '../../img/marcacao_branco.png'
import iconeMarcacaoPreto from '../../img/marcacao_preto.png'
import iconeCompartilhar from '../../img/compartilhar.png'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'


function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [marcado, setMarcado] = useState(false)

  const [compartilhar, setCompartilhar] = useState(false)

  const [comentario, setComentario] = useState([])
  const [inputComentario, setInputComentario] = useState('')

  const [inputCompartilharInstagram, setInputCompartilharInstagram] = useState('')
  const [inputCompartilharFacebook, setInputCompartilharFacebook] = useState('')
  const [inputCompartilharTwitter, setInputCompartilharTwitter] = useState('')

  const handleInputComentario = (event) => {
    setInputComentario(event.target.value)
  }

  const handleInputCompartilharInstagram = (event) => {
    setInputCompartilharInstagram(event.target.value)
  }

  const handleInputCompartilharFacebook = (event) => {
    setInputCompartilharFacebook(event.target.value)
  }

  const handleInputCompartilharTwitter = (event) => {
    setInputCompartilharTwitter(event.target.value)
  }

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (!curtido) {
      setnumeroCurtidas(numeroCurtidas + 1)
    }
    else {
      setnumeroCurtidas(numeroCurtidas - 1)
    }
    console.log('Curtiu!')
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    console.log(comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputComentario('')
    console.log(`Comentário do usuário: ${inputComentario}`)
    const novoComentario = inputComentario
    const novaListaDeComentarios = [...comentario, novoComentario]
    setComentario(novaListaDeComentarios)
  }

  const listaDeComentarios = comentario.map((elemento, index) => {
    const deletarComentario = () => {
      setNumeroComentarios(numeroComentarios - 1)
      const novaListaDeComentarios = [...comentario]
      const deletar = novaListaDeComentarios.findIndex((comentarioExcluido) => {
        return comentarioExcluido === comentario
      })
      novaListaDeComentarios.splice(deletar, 1)
      setComentario(novaListaDeComentarios)
    }
    return (
      <DivComentario key={index}>
        <span>{elemento}</span>
        <button onClick={deletarComentario}><i className="fa fa-trash"></i></button>
      </DivComentario>
    )
  })

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleInputComentario} value={inputComentario} />
  }

  const onClickMarcacao = () => {
    setMarcado(!marcado)
  }

  let iconeMarcacao

  if (marcado) {
    iconeMarcacao = iconeMarcacaoPreto
  } else {
    iconeMarcacao = iconeMarcacaoBranco
  }

  const onClickCompartilhar = () => {
    setCompartilhar(!compartilhar)
    setInputCompartilharInstagram('')
    setInputCompartilharFacebook('')
    setInputCompartilharTwitter('')
  }

  const aoCompartilharInstagram = () => {
    setCompartilhar(false)
    console.log(`Post compartilhado no Instagram com a mensagem: ${inputCompartilharInstagram}`)
  }

  const aoCompartilharFacebook = () => {
    setCompartilhar(false)
    console.log(`Post compartilhado no Facebook com a mensagem: ${inputCompartilharFacebook}`)
  }
  const aoCompartilharTwitter = () => {
    setCompartilhar(false)
    console.log(`Post compartilhado no Twitter com a mensagem: ${inputCompartilharTwitter}`)
  }

  let componenteCompartilhar

  if (compartilhar) {
    componenteCompartilhar = <SecaoCompartilhar aoEnviarInstagram={aoCompartilharInstagram} onChangeComentarioInstagram={handleInputCompartilharInstagram} valueInstagram={inputCompartilharInstagram}
      aoEnviarFacebook={aoCompartilharFacebook} onChangeComentarioFacebook={handleInputCompartilharFacebook} valueFacebook={inputCompartilharFacebook}
      aoEnviarTwitter={aoCompartilharTwitter} onChangeComentarioTwitter={handleInputCompartilharTwitter} valueTwitter={inputCompartilharTwitter} />
  }


  return (
    <PostContainer>
      <PostHeader>
        <UserProfile>
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{props.nomeUsuario}</p>
        </UserProfile>
        <button onClick={props.delet}>X</button>
      </PostHeader>
      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeSemContador
          icone={iconeMarcacao}
          onClickIcone={onClickMarcacao}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={onClickCompartilhar}
        />
      </PostFooter>
      {listaDeComentarios}
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  )
}


export default Post