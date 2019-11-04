import React from 'react';
import { Item, Title, Description} from './styles';
import Emoji from 'a11y-react-emoji';
import Emodex from 'emoji-datasource';

const ListItem = (props) => {
	const emojiObj = props.emojiObj;
	console.log("emojiObj", emojiObj)
	return (
		<Item>
				<Title><span aria-label={emojiObj.name}></span></Title>
				{/* <Description><Emoji role="img">{"&#x"}{emojiObj.unified}</Emoji></Description> */}
		</Item>
	)
}

export default ListItem;