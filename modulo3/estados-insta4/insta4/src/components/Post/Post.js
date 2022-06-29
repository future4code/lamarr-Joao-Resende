import React, { useState } from 'react'
import './style.css'

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
import iconeInstagram from '../../img/instagram.png'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'


function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [marcado, setMarcado] = useState(false)

  const [compartilhar, setCompartilhar] = useState(false)

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
  }

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

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
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
      aoEnviarTwitter={aoCompartilharTwitter} onChangeComentarioTwitter={handleInputCompartilharTwitter} valueTwitter={inputCompartilharTwitter}/>
  }


  return (
    <div className='PostContainer'>
      <div className='PostHeader'>
        <img className='UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className='PostPhoto' src={props.fotoPost} alt={'Imagem do post'} />

      <div className='PostFooter'>
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
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  )
}


export default Post