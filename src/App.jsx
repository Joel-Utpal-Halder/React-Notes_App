import { useState, useEffect } from "react";
import { saveNotes, getNotes } from "./utils/storage";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when app starts
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  // Add new note
  const addNote = (text) => {
    const newNotes = [...notes, { id: Date.now(), text }];
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  // Delete note by ID
  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Notes App</h1>
      {/* Pass addNote function to NoteForm.jsx */}
      <NoteForm onAdd={addNote} /> 
      {/* Pass notes and onDelete function to NoteList.jsx */}
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;