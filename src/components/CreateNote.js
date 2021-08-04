import React, { useState } from "react";
import { store } from "../redux/store";
import { connect } from "react-redux";

const CreateNote = ({add_new_note}) => {
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
    add_new_note(data);
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

const mapDispatchToMaps = dispatch => {
return {
    add_new_note: (data) =>dispatch({
        type: "ADD_NOTE",
        payload: data,
    })
}
}

export default connect(null, mapDispatchToMaps)(CreateNote);
