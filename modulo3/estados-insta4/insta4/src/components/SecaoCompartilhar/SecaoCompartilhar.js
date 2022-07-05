import React from 'react'
import { CommentContainer, InputComentario } from './style'
import iconeInstagram from '../../img/instagram.png'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'


export function SecaoCompartilhar(props) {
	return (
		<div>
			<CommentContainer>
				<img src={iconeInstagram} alt='Icone Instagram'/>
				<InputComentario
					placeholder={'Mensagem'}
					value={props.valueInstagram}
					onChange={props.onChangeComentarioInstagram}
				/>
				<button onClick={props.aoEnviarInstagram}>Enviar</button>
			</CommentContainer>
			<CommentContainer>
				<img src={iconeFacebook} alt='Icone Facebook'/>
				<InputComentario
					placeholder={'Mensagem'}
					value={props.valueFacebook}
					onChange={props.onChangeComentarioFacebook}
				/>
				<button onClick={props.aoEnviarFacebook}>Enviar</button>
			</CommentContainer>
			<CommentContainer>
				<img src={iconeTwitter} alt='Icone Twitter'/>
				<InputComentario
					placeholder={'Mensagem'}
					value={props.valueTwitter}
					onChange={props.onChangeComentarioTwitter}
				/>
				<button onClick={props.aoEnviarTwitter}>Enviar</button>
			</CommentContainer>
		</div>
	)
}