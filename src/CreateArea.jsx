import React, { useState } from "react";
function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function inputChange(event) {
    let { value, name } = event.target;
    setInputText((prevs) => {
      return {
        ...prevs,
        [name]: value,
      };
    });
  }

  function submitNotes(event) {
    props.onAdd(inputText);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={inputChange} name="title" placeholder="Title" />
        <textarea
          onChange={inputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNotes}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
