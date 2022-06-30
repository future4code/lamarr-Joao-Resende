import React from 'react'
import './style.css'


export function IconeSemContador(props) {
	return <div className='IconContainer'>
		<img className ='IconImage' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}