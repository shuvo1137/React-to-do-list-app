import React from "react";
import Header from "./Header";
import Note from "./note";
import Footer from "./Footer";
import notes from "./Dummynote";

function App() {
  return (
    <div>
      <Header></Header>
      {notes.map((note) => {
        return <Note title={note.title} content={note.content}></Note>;
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
