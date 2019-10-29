import styled from 'styled-components';

export const ListWrapper = styled.ul`
display:flex;
flex-direction:column;
margin-left:auto;
margin-right:auto;
margin-bottom:20px;
border-radius:4px;
background-color:${props => props.theme.backgroundSecondary}
`;
