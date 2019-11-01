import React from 'react';
import { Item, Title, Description} from './styles';
import Emoji from 'a11y-react-emoji';
import Emodex from 'emoji-datasource';


const ListItem = () => {
	return (
		<Item>
			{Emodex.map(emoji=>(
				<React.Fragment>
					<Title><span aria-label={emoji.short_name}></span></Title>
					<Description><Emoji role="img">{"&#x"}{emoji.unified}</Emoji></Description>
				</React.Fragment>
			))}


			<span aria-hidden="true" role="img">🤫</span>

		</Item>
	)
}

export default ListItem;