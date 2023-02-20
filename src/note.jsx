import React from "react";

function Note(props) {
  function noteDetails(id) {
    props.onDelete(id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          noteDetails(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}
export default Note;
