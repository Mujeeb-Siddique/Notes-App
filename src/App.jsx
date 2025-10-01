/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import {nanoid} from 'nanoid'
import NotesList from "./Components/NotesList"
import Search from "./Components/Search";
import Header from "./Header";



const App = () => {
    const [searchText, setSearchText] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '20/3/2025'
    },
    
  ]);
  
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
   }, [notes]);
   
   useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (saveNotes) {
      setNotes(saveNotes);
    }
   }, []);
  

  
  
  
  
  
  const addNote = (text) => {
    if (text.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
  
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    } else {
      alert("⚠️ Add some text!"); 
    }
  };
  
  
  
  const delNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes); // <- You forgot this line
  };
  
  
  
  return (
    <div className={`${darkMode && 'dark-mode'}`}> 
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText}/>
          <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={delNote}
          />
        </div>
    </div>
  )
}

export default App;