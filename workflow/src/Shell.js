import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import DropTarget from 'react-dnd/lib/DropTarget';
import $ from 'jquery';

const style = {
	border: '1px Solid gray',
	backgroundColor: 'white',
	padding: '4rem 4rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
    float: 'left',
    
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem() //get action dragged
		const dropResult = monitor.getDropResult() //get dropbox parameters
		if (dropResult) {// updating the content of the container(Dropbox) as per the actions dragged into it
			var elem = $(`#${dropResult.name}`);
			if(item.name === "Remove"){
				elem.text("");
				return;
			}
			elem.text(item.name);
		}
	},
}

class Shell extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	}

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1
		return connectDragSource(<div style={{ ...style, opacity }}>{name}</div>) // draggable action shells
	}
}


export default DragSource(ItemTypes.Shell, boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Shell);



