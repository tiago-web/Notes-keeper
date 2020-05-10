import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

const CreateArea = props => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [customStyles, setCustomStyles] = useState({
		rows: 1,
		textType: "hidden",
		buttonType: "hidden",
		in: false,
	});

	function createNote(e) {
		props.addNote(title, content);
		setTitle("");
		setContent("");
		e.preventDefault();
	}

	return (
		<form onSubmit={createNote} className="create-note">
			<input
				onChange={e => setTitle(e.target.value)}
				value={title}
				placeholder="Title"
				type={customStyles.textType}
			/>
			<textarea
				onChange={e => setContent(e.target.value)}
				onFocus={() =>
					setCustomStyles({
						rows: 3,
						textType: "text",
						in: true,
					})
				}
				value={content}
				placeholder="Take a note..."
				rows={customStyles.rows}
			/>
			<Zoom in={customStyles.in}>
				<Fab type="submit">
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	);
};

export default CreateArea;
