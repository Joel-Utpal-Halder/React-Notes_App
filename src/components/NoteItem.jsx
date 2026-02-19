// A single Note item component
// Responsible only for displaying one note and handling its delete action

export default function NoteItem({ note, onDelete }) {
  return (
    <li 
      className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
    >
      {/* Note text */}
      <span className="text-gray-800">{note.text}</span>
      
      {/* Delete button */}
      <button 
        onClick={() => onDelete(note.id)} 
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        Delete
      </button>
    </li>
  );
}