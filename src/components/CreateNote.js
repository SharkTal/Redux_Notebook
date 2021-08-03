import React, { useState } from "react";

const CreateNote = ({createNote}) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
   // console.log(data);
    createNote(data)
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            cols="30"
            className="form-control"
            placeholder="write your note: "
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className="btn" type="submit">
            Add note
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreateNote;
