import NoteItem from "./NoteItem";

// Renders a list of notes by mapping over NoteItem.
export default function NoteList({ notes, onDelete }) {
  return (
    <ul className="w-full max-w-md space-y-2">
      {notes.map(note => (
        <NoteItem 
          key={note.id} 
          note={note} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}