import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
//import notes from "../notes";

const App = () => {
	const [notes, setNotes] = useState([]);

	function addNote(newTitle, newContent) {
		setNotes(prevNotes => [
			...prevNotes,
			{ title: newTitle, content: newContent },
		]);
	}

	function deleteNote(id) {
		setNotes(prevNotes => {
			return prevNotes.filter((note, index) => id !== index);
		});
	}

	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					deleteNote={deleteNote}
				/>
			))}
			<Footer />
		</div>
	);
};

export default App;
