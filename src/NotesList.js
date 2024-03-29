import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepMatches = (note) => note.doesMatchSearch === true;
  const searchMatches = props.notes.filter(keepMatches);

  const renderNote = (note) => (
    <Note
      onType={props.onType}
      deleteNote={props.deleteNote}
      note={note}
      key={note.id}
    />
  );
  const newNote = searchMatches.map(renderNote);
  return <ul className="notes-list">{newNote}</ul>;
};

export default NotesList;
