import React, {Component} from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

class List extends React.Component{
	render(){
		const {emodex} = this.props;
		return (
			<React.Fragment>
				<input type="text" placeholder="search emoji"/>
				< ListWrapper >
					{this.props.emodex.map((emojiObj, i) =>
						<ListItem key={i} emojiObj={emojiObj}></ListItem>)}
				</ListWrapper>
			</React.Fragment>
	)}
}


export default List;
