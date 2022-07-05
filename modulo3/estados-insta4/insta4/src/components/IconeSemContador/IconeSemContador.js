import React from 'react'
import { IconContainer, IconImage } from './style'


export function IconeSemContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconContainer>
}