const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      <li className="note"></li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};
export default Note;
