import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty notes
    onAdd(text);
    setText(""); // Clear input after adding
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex gap-2 mb-4 w-full max-w-md"
    >
      {/* Input field */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Write a note..."
        className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* Add button */}
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}