import React, { Component } from 'react';

let btn = { cursor: 'pointer' };

const List = (props) => (
	<ul className="siimple-list">
		{props.todos.map((todo, i) => {
			let style = {
				maxWidth: '700px',
				textDecoration: todo.done ? 'line-through' : 'none',
			 };
			return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>
				<input type="checkbox" onClick={() => props.handleDone(i)}/>
				{todo.title}
				<span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
				</li>
		})};
	</ul>
);

export default List;