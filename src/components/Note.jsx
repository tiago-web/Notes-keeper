import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = props => {
	return (
		<div className="note" id={props.id}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button
				onClick={() => {
					props.deleteNote(props.id);
				}}
			>
				<DeleteIcon />
			</button>
		</div>
	);
};

export default Note;
