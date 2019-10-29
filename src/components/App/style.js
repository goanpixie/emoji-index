import styled from 'styled-components';
import {tablet} from 'styles/mediaQueries';

export const Wrapper = styled.div`
	height:100%;
	margin-left:auto;
	margin-right:auto;
	width:85%;
	overflow:hidden;
	pad-bottom:200px;

	${tablet}{
		width:96%;
	}
`
export const Title = styled.h1`
	color:${props => props.theme.textSecondary};
	font-size:20px;
	font-weight:300;
	margin-top:24px;
	margin-botton:26px;
`