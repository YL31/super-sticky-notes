import React from "react";

const Note = (props) => {
  console.log(props);
  const updateTitle = (event) => {
    const updatedValue = event.target.value;
    const editId = props.note.id;
    props.onType(editId, "title", updatedValue);
  };
  const updateDescription = (event) => {
    const updatedValue = event.target.value;
    const editId = props.note.id;
    props.onType(editId, "description", updatedValue);
  };
  const clickDelete = () => {
    props.deleteNote(props.note.id);
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
