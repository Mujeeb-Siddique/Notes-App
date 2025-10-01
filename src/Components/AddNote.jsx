/* eslint-disable react/prop-types */
import  { useState } from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const CharacterLimit = 200;
  
  function handleChange(e){
    if(CharacterLimit - e.target.value.length >=0){
      setNoteText(e.target.value)
    }
  }
  
  function handleSaveClick(){
    
    handleAddNote(noteText)
    setNoteText('')
  }
  
  
  
  return (
    <div className='note-new'>
      <textarea 
       rows="8"
       placeholder='type to add note...'
       value={noteText}
       onChange={handleChange}
       
      ></textarea>
      <div className='note-fotter' >
        <small className='note-new-small'>{CharacterLimit - noteText.length } Remaining</small>  
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
