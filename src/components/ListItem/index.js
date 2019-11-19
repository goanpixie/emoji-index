import React from 'react';
import { Item, Title, Description} from './styles';
import Emoji from 'a11y-react-emoji';

const ListItem = (props) => {
	const emojiObj = props.emojiObj;
	console.log("emojiObj", emojiObj)
	return (
		<Item>
			<Title><span aria-label={emojiObj.short_name}>{emojiObj.short_name}</span></Title>
			{/* <span role="img">{"&#x" + emojiObj.unified}</span> */}
		</Item>
	)
}

export default ListItem;