import React from "react";
import Note from "./components/Note";

const ImportantNotes = ({ notes, toggle_note }) => {
  return (
    <div className="importantNotes">
       <h4>Important Notes</h4> 
      {notes
        .filter((note) => note.isImportant === true)
        .map((note) => (
          <Note note={note} toggle_note={toggle_note} key={note.id} />
        ))}
    </div>
  );
};

export default ImportantNotes;
