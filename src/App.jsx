import React, { useState } from "react";
import Header from "./Header";
import Note from "./note";
import Footer from "./Footer";
import notes from "./Dummynote";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(note) {
    setNotes((prevs) => {
      return [...prevs, note];
    });
  }

  function deleteNotes(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addNotes}></CreateArea>
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          ></Note>
        );
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
