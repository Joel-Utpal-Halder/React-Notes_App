// Save notes to localStorage. Handles local storage logic.
export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Retrieve notes from localStorage
export const getNotes = () => {
  const saved = localStorage.getItem("notes");
  return saved ? JSON.parse(saved) : [];
};