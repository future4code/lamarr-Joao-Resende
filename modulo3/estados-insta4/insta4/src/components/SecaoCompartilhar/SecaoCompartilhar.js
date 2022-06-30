import React from 'react'
import './style.css'
import iconeInstagram from '../../img/instagram.png'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'


export function SecaoCompartilhar(props) {
	return (
		<div>
			<div className='CommentContainer'>
				<img src={iconeInstagram} />
				<input className='InputComentario'
					placeholder={'Mensagem'}
					value={props.valueInstagram}
					onChange={props.onChangeComentarioInstagram}
				/>
				<button onClick={props.aoEnviarInstagram}>Enviar</button>
			</div>
			<div className='CommentContainer'>
				<img src={iconeFacebook} />
				<input className='InputComentario'
					placeholder={'Mensagem'}
					value={props.valueFacebook}
					onChange={props.onChangeComentarioFacebook}
				/>
				<button onClick={props.aoEnviarFacebook}>Enviar</button>
			</div>
			<div className='CommentContainer'>
				<img src={iconeTwitter} />
				<input className='InputComentario'
					placeholder={'Mensagem'}
					value={props.valueTwitter}
					onChange={props.onChangeComentarioTwitter}
				/>
				<button onClick={props.aoEnviarTwitter}>Enviar</button>
			</div>
		</div>
	)
}