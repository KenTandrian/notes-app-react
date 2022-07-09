import React from "react";
import NoteItem from "./NoteItem";

const ActiveNotes = ({ notesList, onDelete, onArchive }) => {
    return (
        <>
            <h2>Active Notes</h2>
            {
                notesList.length !== 0 ?
                <div className="notes-list">
                {
                    notesList.map(item => (
                        <NoteItem key={item.id} note={item} onDelete={onDelete} onArchive={onArchive} />
                    ))
                }
                </div> :
                <p className="notes-list__empty-message">No notes here.</p>
            }
        </>
    )
}

export default ActiveNotes;