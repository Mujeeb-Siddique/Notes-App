/* eslint-disable react/prop-types */
import AddNote from "./AddNote"
import Note from "./Note"


const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-list">
    <AddNote handleAddNote={handleAddNote}/>
        {notes.map((note, key)=> (
          <Note
          key={key}
           id={note.id}
           text={note.text}
           date={note.date}
           handleDeleteNote={handleDeleteNote}
           />
           
        ))}
    </div>
  )
}

export default NotesList
