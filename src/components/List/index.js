import React from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

const List = ({ emodex, title }) => (
	<React.Fragment>
		< h1 > {title}</h1>
		< ListWrapper >
			{emodex.map((emojiObj, i) =>
				<ListItem key={i} emojiObj={emojiObj}></ListItem>)}
		</ListWrapper>
	</React.Fragment>
)

export default List;
