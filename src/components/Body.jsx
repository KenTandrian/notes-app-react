import React from "react";
import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";
import NotesInput from "./NotesInput";

const AppBody = ({ notes, addNewNote, onDelete, onArchive }) => {
    return (
        <div className="note-app__body">
            <NotesInput addNewNote={addNewNote} />
            <ActiveNotes notesList={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
            <ArchivedNotes notesList={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default AppBody;